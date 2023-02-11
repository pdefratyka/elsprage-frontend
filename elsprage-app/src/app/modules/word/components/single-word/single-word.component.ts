import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-single-word',
  templateUrl: './single-word.component.html',
  styleUrls: ['./single-word.component.scss'],
})
export class SingleWordComponent {
  @Input()
  word: Word;

  @Output()
  wordRemove: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  wordEdit: EventEmitter<Word> = new EventEmitter<Word>();

  removeWord(): void {
    this.wordRemove.emit(this.word.id);
  }

  editWord(): void {
    this.wordEdit.emit(this.word);
  }
}
