import { createAction, props } from '@ngrx/store';
import { GameResult } from 'src/app/modules/shared/models/gameResult';
import { CreateTopicRequest } from 'src/app/modules/shared/models/requests/create-topic-request';
import { PaperResultRequest } from 'src/app/modules/shared/models/requests/paper-result-request';

const GAME_PAGE = 'Game Page';

export const getGamePackets = createAction(`[${GAME_PAGE}] Get Game Packets`, props<{ gameType: string }>());

export const saveGameResult = createAction(`[${GAME_PAGE}] Save Game Result`, props<{ gameResult: GameResult }>());

export const saveTag = createAction(`[${GAME_PAGE}] Save Tag`, props<{ tag: string }>());

export const getTags = createAction(`[${GAME_PAGE}] Get Tags`);

export const deleteTag = createAction(`[${GAME_PAGE}] Delete Tag`, props<{ tagId: number }>());

export const saveTopic = createAction(`[${GAME_PAGE}] Save Topic`, props<{ topicRequest: CreateTopicRequest }>());

export const deleteTopic = createAction(`[${GAME_PAGE}] Delete Topic`, props<{ topicId: number }>());

export const getTopics = createAction(`[${GAME_PAGE}] Get Topics`);

export const savePaperResult = createAction(`[${GAME_PAGE}] Save Paper Result`, props<{ paperResultRequest: PaperResultRequest }>());

export const getPaperResults = createAction(`[${GAME_PAGE}] Get Paper Results`);

export const getPaperModes = createAction(`[${GAME_PAGE}] Get Paper Modes`);

export const getSinglePaperResult = createAction(`[${GAME_PAGE}] Get Single Paper Result`, props<{ paperResultId: number }>());