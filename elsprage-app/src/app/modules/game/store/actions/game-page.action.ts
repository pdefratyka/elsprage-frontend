import { createAction, props } from '@ngrx/store';
import { GameResult } from 'src/app/modules/shared/models/gameResult';

const GAME_PAGE = 'Game Page';

export const getGamePackets = createAction(`[${GAME_PAGE}] Get Game Packets`, props<{ gameType: string }>());

export const saveGameResult = createAction(`[${GAME_PAGE}] Save Game Result`, props<{ gameResult: GameResult }>());
