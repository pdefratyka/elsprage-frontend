import { createAction, props } from '@ngrx/store';
import { GamePacket } from 'src/app/modules/shared/models/gamePacket';

const GAME_API = 'Game API';

export const getGamePacketsSuccess = createAction(
  `[${GAME_API}] Get Game Packets Success`,
  props<{ gamePackets: GamePacket[] }>()
);

export const getGamePacketsFailure = createAction(
  `[${GAME_API}] Get Game Packets Failure`,
  props<{ error: Error }>()
);

export const saveGameResultSuccess = createAction(
  `[${GAME_API}] Save Game Result Success`
);

export const saveGameResultFailure = createAction(
  `[${GAME_API}] Save Game Result Failure`,
  props<{ error: Error }>()
);
