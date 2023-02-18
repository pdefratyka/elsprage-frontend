import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Word } from 'src/app/modules/shared/models/word';

@Component({
  selector: 'app-packet-single-word',
  templateUrl: './packet-single-word.component.html',
  styleUrls: ['./packet-single-word.component.scss'],
})
export class PacketSingleWordComponent {
  @Input()
  word: Word;
  @Output()
  wordRemove: EventEmitter<Word> = new EventEmitter<Word>();

  removeWord(): void {
    this.wordRemove.emit(this.word);
  }
}
