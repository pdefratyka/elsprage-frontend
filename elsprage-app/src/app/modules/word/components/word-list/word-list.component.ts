import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from 'src/app/modules/shared/models/language';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss'],
})
export class WordListComponent {
  @Input()
  words: Word[];
  @Output()
  wordRemove: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  wordEdit: EventEmitter<Word> = new EventEmitter<Word>();

  constructor() {}

  removeWord(wordId: number): void {
    this.wordRemove.emit(wordId);
  }

  editWord(word: Word): void {
    this.wordEdit.emit(word);
  }
}
