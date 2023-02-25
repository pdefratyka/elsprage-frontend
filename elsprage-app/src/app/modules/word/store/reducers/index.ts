import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromChartReducer from './word.reducer';

export interface WordState {
  word: fromChartReducer.WordState;
}

export const wordReducer: ActionReducerMap<WordState> = {
  word: fromChartReducer.wordReducer,
};

export const getWordState = createFeatureSelector<WordState>('word');

export const getLanguages = createSelector(getWordState, (state) => {
  return state.word.languages;
});

export const getWords = createSelector(getWordState, (state) => {
  return state.word.words;
});

export const getPage = createSelector(getWordState, (state) => {
  return state.word.page;
});

export const getPageSize = createSelector(getWordState, (state) => {
  return state.word.pageSize;
});

export const getNumberOfWords = createSelector(getWordState, (state) => {
  return state.word.numberOfWords;
});

export const getSelectedWord = createSelector(getWordState, (state) => {
  return state.word.selectedWord;
});
