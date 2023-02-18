import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from 'src/app/modules/shared/models/language';
import { PacketRequest } from 'src/app/modules/shared/models/requests/packet-request';
import { Word } from 'src/app/modules/shared/models/word';
import {
  getLanguages,
  getWords,
  WordPageAction,
  WordState,
} from 'src/app/modules/word/store';
import { PacketPageAction, PacketState } from '../../store';

@Component({
  selector: 'app-create-packet',
  templateUrl: './create-packet.component.html',
  styleUrls: ['./create-packet.component.scss'],
})
export class CreatePacketComponent {
  languages$: Observable<Language[]>;
  words$: Observable<Word[]>;

  constructor(
    private store: Store<WordState>,
    private packetStore: Store<PacketState>
  ) {
    this.languages$ = this.store.select(getLanguages);
    this.words$ = this.store.select(getWords);
  }

  ngOnInit(): void {
    this.store.dispatch(WordPageAction.getWords());
    this.store.dispatch(WordPageAction.getLanguages());
  }

  createPacket(packetRequest: PacketRequest): void {
    this.store.dispatch(PacketPageAction.savePacket({packetRequest}));
  }
}
