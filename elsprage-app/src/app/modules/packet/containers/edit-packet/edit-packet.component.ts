import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from 'src/app/modules/shared/models/language';
import { Packet } from 'src/app/modules/shared/models/packet';
import { PacketRequest } from 'src/app/modules/shared/models/requests/packet-request';
import { Word } from 'src/app/modules/shared/models/word';
import {
  getLanguages,
  getNumberOfWords,
  getWords,
  WordPageAction,
  WordState,
} from 'src/app/modules/word/store';
import {
  getAddedWords,
  getPacket,
  getWordsToAdd,
  PacketPageAction,
  PacketState,
} from '../../store';

@Component({
  selector: 'app-edit-packet',
  templateUrl: './edit-packet.component.html',
  styleUrls: ['./edit-packet.component.scss'],
})
export class EditPacketComponent {
  languages$: Observable<Language[]>;
  words$: Observable<Word[]>;
  addedWords$: Observable<Word[]>;
  numberOfWords$: Observable<number>;
  packet$: Observable<Packet>;
  currentQuery: string = '';

  constructor(
    private store: Store<WordState>,
    private packetStore: Store<PacketState>,
    private route: ActivatedRoute
  ) {
    this.languages$ = this.store.select(getLanguages);
    this.words$ = this.packetStore.select(getWordsToAdd);
    this.addedWords$ = this.packetStore.select(getAddedWords);
    this.numberOfWords$ = this.store.select(getNumberOfWords);
    this.packet$ = this.packetStore.select(getPacket);
    this.store.select(getWords).subscribe((r) => {
      this.store.dispatch(
        PacketPageAction.initReloadWordsToAdd({ wordsToAdd: r })
      );
    });
  }

  ngOnInit(): void {
    const packetId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(PacketPageAction.getPacketById({ packetId }));
    // this.store.dispatch(PacketPageAction.initCreatePacket());
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
