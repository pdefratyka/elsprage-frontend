import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-packet-word-list-to-add',
  templateUrl: './packet-word-list-to-add.component.html',
  styleUrls: ['./packet-word-list-to-add.component.scss'],
})
export class PacketWordListToAddComponent {
  @Input()
  words: Word[];
  @Output()
  wordAdd: EventEmitter<Word> = new EventEmitter<Word>();

  addWord(word: Word): void {
    this.wordAdd.emit(word);
  }
}
