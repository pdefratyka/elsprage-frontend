import { createAction, props } from '@ngrx/store';
import { LearningMode } from 'src/app/modules/shared/models/learningMode';
import { LearningResult } from 'src/app/modules/shared/models/learningResult';

const LEARNING_PAGE = 'Learning Page';

export const getLearningPackets = createAction(`[${LEARNING_PAGE}] Get Learning Packets`);

export const getPacketsWords = createAction(`[${LEARNING_PAGE}] Get Packets Words`,
    props<{ packetId: number, learningMode: LearningMode, repetitionMode: boolean }>());

export const saveLearningResult = createAction(`[${LEARNING_PAGE}] Save Learning Result`, props<{ learningResult: LearningResult }>());

export const cleanLearningState = createAction(`[${LEARNING_PAGE}] Clean Learning State`);
