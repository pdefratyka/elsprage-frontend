import { createReducer, on } from '@ngrx/store';
import { Language } from 'src/app/modules/shared/models/language';
import { Word } from 'src/app/modules/shared/models/word';
import { WordApiAction } from '../actions';

export interface WordState {
  error: string;
  languages: Language[];
  words: Word[];
  selectedWord: Word;
}

export const initialState: WordState = {
  error: '',
  languages: [],
  words: [],
  selectedWord: {} as Word,
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
      words: action.usersWordsResponse.words,
      error: '',
    };
  }),
  on(WordApiAction.getWordsFailure, (state, action): WordState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
  on(WordApiAction.removeWordSuccess, (state, action): WordState => {
    const words = state.words.filter((w) => w.id !== action.wordId);
    return {
      ...state,
      words: words,
      error: '',
    };
  }),
  on(WordApiAction.removeWordFailure, (state, action): WordState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
  on(WordApiAction.getWordByIdSuccess, (state, action): WordState => {
    return {
      ...state,
      selectedWord: action.word,
      error: '',
    };
  }),
  on(WordApiAction.getWordByIdFailure, (state, action): WordState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
  on(WordApiAction.updateWordSuccess, (state, action): WordState => {
    // const words = state.words.filter((w) => w.id !== action.word.id);
    // words.push(action.word);
    return {
      ...state,
      error: '',
    };
  }),
  on(WordApiAction.updateWordFailure, (state, action): WordState => {
    return {
      ...state,
      error: action.error.message,
    };
  })
);
