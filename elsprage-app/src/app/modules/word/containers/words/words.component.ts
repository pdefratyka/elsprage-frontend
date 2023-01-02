import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Word } from 'src/app/modules/shared/models/word';
import { getWords, WordPageAction, WordState } from '../../store';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent {
  words$: Observable<Word[]>;

  constructor(private store: Store<WordState>) {
    this.words$ = this.store.select(getWords);
  }

  ngOnInit(): void {
    this.store.dispatch(WordPageAction.getWords());
  }
}
