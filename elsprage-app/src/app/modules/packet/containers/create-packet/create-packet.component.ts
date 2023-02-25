import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from 'src/app/modules/shared/models/language';
import { PacketRequest } from 'src/app/modules/shared/models/requests/packet-request';
import { Word } from 'src/app/modules/shared/models/word';
import {
  getLanguages,
  getNumberOfWords,
  getWords,
  WordPageAction,
  WordState,
} from 'src/app/modules/word/store';
import { PacketPageAction } from '../../store';

@Component({
  selector: 'app-create-packet',
  templateUrl: './create-packet.component.html',
  styleUrls: ['./create-packet.component.scss'],
})
export class CreatePacketComponent {
  languages$: Observable<Language[]>;
  words$: Observable<Word[]>;
  numberOfWords$: Observable<number>;
  currentQuery: string = '';

  constructor(private store: Store<WordState>) {
    this.languages$ = this.store.select(getLanguages);
    this.words$ = this.store.select(getWords);
    this.numberOfWords$ = this.store.select(getNumberOfWords);
  }

  ngOnInit(): void {
    this.store.dispatch(WordPageAction.getWords({ query: '', page: 0 }));
    this.store.dispatch(WordPageAction.getLanguages());
  }

  createPacket(packetRequest: PacketRequest): void {
    this.store.dispatch(PacketPageAction.savePacket({ packetRequest }));
  }

  getWordsByQuery(query: string): void {
    this.currentQuery = query;
    this.store.dispatch(WordPageAction.getWords({ query, page: 0 }));
  }

  selectPage(page: number): void {
    this.store.dispatch(
      WordPageAction.getWords({ query: this.currentQuery, page })
    );
  }
}
