import { createReducer, on } from '@ngrx/store';
import { GamePacket } from 'src/app/modules/shared/models/gamePacket';
import { GameApiAction } from '../actions';

export interface GameState {
  error: string;
  gamePackets: GamePacket[];
}

export const initialState: GameState = {
  error: '',
  gamePackets: []
};

export const gameReducer = createReducer<GameState>(
  initialState,
  on(GameApiAction.getGamePacketsSuccess, (state, { gamePackets }): GameState => {
    return {
      ...state,
      gamePackets,
      error: '',
    };
  }),
  on(GameApiAction.getGamePacketsFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  })
);
