import { createReducer, on } from '@ngrx/store';
import { Language } from 'src/app/modules/shared/models/language';
import { Word } from 'src/app/modules/shared/models/word';
import { WordApiAction } from '../actions';

export interface WordState {
  error: string;
  languages: Language[];
  words: Word[];
}

export const initialState: WordState = {
  error: '',
  languages: [],
  words: [],
};

export const wordReducer = createReducer<WordState>(
  initialState,
  on(WordApiAction.saveWordSuccess, (state, action): WordState => {
    return {
      ...state,
      error: '',
    };
  }),
  on(WordApiAction.saveWordFailure, (state, action): WordState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
  on(WordApiAction.getLanguagesSuccess, (state, action): WordState => {
    return {
      ...state,
      languages: action.languagesResponse.languages,
      error: '',
    };
  }),
  on(WordApiAction.getLanguagesFailure, (state, action): WordState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
  on(WordApiAction.getWordsSuccess, (state, action): WordState => {
    return {
      ...state,
      words: action.words,
      error: '',
    };
  }),
  on(WordApiAction.getWordsFailure, (state, action): WordState => {
    return {
      ...state,
      error: action.error.message,
    };
  })
);
