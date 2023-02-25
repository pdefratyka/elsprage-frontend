import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Word } from 'src/app/modules/shared/models/word';
import {
  getNumberOfWords,
  getWords,
  WordPageAction,
  WordState,
} from '../../store';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss'],
})
export class WordsComponent {
  words$: Observable<Word[]>;
  numberOfWords$: Observable<number>;
  currentQuery: string = '';

  constructor(private store: Store<WordState>, private router: Router) {
    this.words$ = this.store.select(getWords);
    this.numberOfWords$ = this.store.select(getNumberOfWords);
  }

  ngOnInit(): void {
    this.store.dispatch(WordPageAction.getWords({ query: '', page: 0 }));
  }

  removeWord(word: Word): void {
    this.store.dispatch(WordPageAction.removeWord({ wordId: word.id }));
  }

  editWord(word: Word): void {
    this.router.navigate(['/words/edit/' + word.id]);
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
