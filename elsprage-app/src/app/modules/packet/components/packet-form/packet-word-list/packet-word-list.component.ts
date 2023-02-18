import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-packet-word-list',
  templateUrl: './packet-word-list.component.html',
  styleUrls: ['./packet-word-list.component.scss'],
})
export class PacketWordListComponent {
  @Input()
  words: Word[];
  @Output()
  wordRemove: EventEmitter<Word> = new EventEmitter<Word>();

  removeWord(word: Word): void {
    this.wordRemove.emit(word);
  }
}
