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
  @Output()
  mainAction: EventEmitter<Word> = new EventEmitter<Word>();
  @Output()
  secondaryAction: EventEmitter<Word> = new EventEmitter<Word>();

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
  }
}
