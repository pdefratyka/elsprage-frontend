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