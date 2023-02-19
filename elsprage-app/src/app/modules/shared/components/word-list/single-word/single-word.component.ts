import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Word } from '../../../models/word';

@Component({
  selector: 'app-single-word',
  templateUrl: './single-word.component.html',
  styleUrls: ['./single-word.component.scss'],
})
export class SingleWordComponent implements OnInit {
  @Input()
  word: Word;
  @Input()
  isMainActionButton: boolean;
  @Input()
  isSecondaryActionButton: boolean;
  @Input()
  isImage: boolean;
  bigColSize = '0%';
  smallColSize = '8.3%';
  numberOfSmallColumns: number;
  numberOfBigColumns: number;

  @Output()
  secondaryAction: EventEmitter<Word> = new EventEmitter<Word>();

  @Output()
  mainAction: EventEmitter<Word> = new EventEmitter<Word>();

  ngOnInit(): void {
    this.getNumberOfColumns();
    this.bigColSize =
      (100 - 8.3 * this.numberOfSmallColumns) / this.numberOfBigColumns + '%';
  }

  emitSecondaryAction(): void {
    this.secondaryAction.emit(this.word);
  }

  emitMainAction(): void {
    this.mainAction.emit(this.word);
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
