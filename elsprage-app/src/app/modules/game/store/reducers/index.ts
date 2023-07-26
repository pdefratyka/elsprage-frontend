import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromGameReducer from './game.reducer';

export interface GameState {
  gameReducer: fromGameReducer.GameState;
}

export const gameReducer: ActionReducerMap<GameState> = {
  gameReducer: fromGameReducer.gameReducer,
};

export const getGameState = createFeatureSelector<GameState>('game');

export const getGamePackets = createSelector(getGameState, (state) => {
  return state.gameReducer.gamePackets;
});

export const getTags = createSelector(getGameState, (state) => {
  return state.gameReducer.tags;
});

export const getTopics = createSelector(getGameState, (state) => {
  return state.gameReducer.topics;
});

export const getSavedPaperResult = createSelector(getGameState, (state) => {
  return state.gameReducer.savedPaperResults;
});

export const getPaperResults = createSelector(getGameState, (state) => {
  return state.gameReducer.paperResults;
});

export const getPaperModes = createSelector(getGameState, (state) => {
  return state.gameReducer.paperModes;
});

export const getSinglePaperResult = createSelector(getGameState, (state) => {
  return state.gameReducer.singlePaperResult;
});