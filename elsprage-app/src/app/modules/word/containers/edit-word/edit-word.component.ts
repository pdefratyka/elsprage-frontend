import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from 'src/app/modules/shared/models/language';
import { Word } from 'src/app/modules/shared/models/word';
import {
  getLanguages,
  getSelectedWord,
  WordPageAction,
  WordState,
} from '../../store';
import { SynonymsService } from 'src/app/modules/core/services/helper/synonyms.service';

@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.scss'],
})
export class EditWordComponent {
  languages$: Observable<Language[]>;
  word$: Observable<Word>;

  constructor(private store: Store<WordState>, private route: ActivatedRoute) {
    this.languages$ = this.store.select(getLanguages);
    this.word$ = this.store.select(getSelectedWord);
  }

  ngOnInit(): void {
    const wordId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(WordPageAction.getLanguages());
    this.store.dispatch(WordPageAction.getWordById({ wordId }));
  }

  saveWord(word: Word) {
    this.removeUnnecessarySpaces(word);
    this.store.dispatch(WordPageAction.updateWord({ word }));
  }

  removeUnnecessarySpaces(word: Word): void {
    word.translation = SynonymsService.removeSpaces(word.translation);
    word.value = SynonymsService.removeSpaces(word.value);
  }
}
