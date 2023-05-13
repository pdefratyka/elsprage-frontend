import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Word } from '../../models/word';

@Component({
  selector: 'app-shared-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss'],
})
export class WordListComponent implements OnInit {
  @Input()
  words: Word[];
  @Input()
  isMainActionButton: boolean;
  @Input()
  isSecondaryActionButton: boolean;
  @Input()
  isImage: boolean;
  @Input()
  isUsed: boolean;
  @Input()
  isWordFilter: boolean;
  @Input()
  numberOfWords: number;
  @Output()
  mainAction: EventEmitter<Word> = new EventEmitter<Word>();
  @Output()
  secondaryAction: EventEmitter<Word> = new EventEmitter<Word>();
  @Output()
  wordFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  pageSelection: EventEmitter<number> = new EventEmitter<number>();

  bigColSize = '0%';
  smallColSize = '8.3%';
  numberOfSmallColumns: number;
  numberOfBigColumns: number;

  constructor() {}
  ngOnInit(): void {
    this.getNumberOfColumns();
    this.bigColSize =
      (100 - 8.3 * this.numberOfSmallColumns) / this.numberOfBigColumns + '%';
  }

  emitSecondaryAction(word: Word): void {
    this.secondaryAction.emit(word);
  }

  emitMainAction(word: Word): void {
    this.mainAction.emit(word);
  }

  emitWordFilter(query: string): void {
    this.wordFilter.emit(query);
  }

  selectPage(page: number): void {
    this.pageSelection.emit(page);
  }

  private getNumberOfColumns(): void {
    this.numberOfSmallColumns = 2;
    this.numberOfBigColumns = 2;
    if (this.isMainActionButton) {
      this.numberOfSmallColumns++;
    }
    if (this.isSecondaryActionButton) {
      this.numberOfSmallColumns++;
    }
    if (this.isImage) {
      this.numberOfBigColumns++;
    }
    if (this.isUsed) {
      this.numberOfSmallColumns++;
    }
  }
}
