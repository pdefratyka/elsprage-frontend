import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-packet-word-list-to-add-single-word',
  templateUrl: './packet-word-list-to-add-single-word.component.html',
  styleUrls: ['./packet-word-list-to-add-single-word.component.scss'],
})
export class PacketWordListToAddSingleWordComponent {
  @Input()
  word: Word;
  @Output()
  wordAdd: EventEmitter<Word> = new EventEmitter<Word>();

  addWord(): void {
    this.wordAdd.emit(this.word);
  }
}
