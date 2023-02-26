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
import { getAddedWords, getWordsToAdd, PacketPageAction } from '../../store';
import { PacketState } from '../../store/reducers/packet.reducer';

@Component({
  selector: 'app-create-packet',
  templateUrl: './create-packet.component.html',
  styleUrls: ['./create-packet.component.scss'],
})
export class CreatePacketComponent {
  languages$: Observable<Language[]>;
  words$: Observable<Word[]>;
  addedWords$: Observable<Word[]>;
  numberOfWords$: Observable<number>;
  currentQuery: string = '';

  constructor(
    private store: Store<WordState>,
    private packetStore: Store<PacketState>
  ) {
    this.languages$ = this.store.select(getLanguages);
    this.words$ = this.packetStore.select(getWordsToAdd);
    this.addedWords$ = this.packetStore.select(getAddedWords);
    this.numberOfWords$ = this.store.select(getNumberOfWords);
    this.store.select(getWords).subscribe((r) => {
      this.store.dispatch(
        PacketPageAction.initReloadWordsToAdd({ wordsToAdd: r })
      );
    });
  }

  ngOnInit(): void {
    this.store.dispatch(PacketPageAction.initCreatePacket());
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

  addWordToPacket(word: Word): void {
    this.store.dispatch(PacketPageAction.addWordToPacket({ word }));
  }

  removeWordFromPacket(word: Word): void {
    this.store.dispatch(PacketPageAction.removeWordFromPacket({ word }));
  }
}
