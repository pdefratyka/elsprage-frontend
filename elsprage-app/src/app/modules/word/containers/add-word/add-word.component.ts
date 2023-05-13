import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from 'src/app/modules/shared/models/language';
import { Word } from 'src/app/modules/shared/models/word';
import { getLanguages, WordPageAction, WordState } from '../../store';
import { SynonymsService } from 'src/app/modules/core/services/helper/synonyms.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss'],
})
export class AddWordComponent implements OnInit {
  languages$: Observable<Language[]>;

  constructor(private store: Store<WordState>) {
    this.languages$ = this.store.select(getLanguages);
  }

  ngOnInit(): void {
    this.store.dispatch(WordPageAction.getLanguages());
  }

  saveWord(word: Word): void {
    this.removeUnnecessarySpaces(word);
    this.store.dispatch(WordPageAction.saveWord({ word }));
  }

  removeUnnecessarySpaces(word: Word): void {
    word.translation = SynonymsService.removeSpaces(word.translation);
    word.value = SynonymsService.removeSpaces(word.value);
  }
}
