import { createAction, props } from '@ngrx/store';
import { LearningPacket } from 'src/app/modules/shared/models/learningPacket';
import { LearningWord } from 'src/app/modules/shared/models/learningWord';
import { PacketsWordsResponse } from 'src/app/modules/shared/models/responses/packets-words-response';

const LEARNING_API = 'Learning API';

export const getLearningPacketsSuccess = createAction(
  `[${LEARNING_API}] Get Learning Packets Success`,
  props<{ learningPackets: LearningPacket[] }>()
);

export const getLearningPacketsFailure = createAction(
  `[${LEARNING_API}] Get Learning Packets Failure`,
  props<{ error: Error }>()
);

export const getPacketsWordsSuccess = createAction(
  `[${LEARNING_API}] Get Packets Words Success`,
  props<{ learningWords: LearningWord[] }>()
);

export const getPacketsWordsFailure = createAction(
  `[${LEARNING_API}] Get Packets Words Failure`,
  props<{ error: Error }>()
);

export const saveLearningResultSuccess = createAction(
  `[${LEARNING_API}] Save Learning Result Success`
);

export const saveLearningResultFailure = createAction(
  `[${LEARNING_API}] Save Learning Result Failure`,
  props<{ error: Error }>()
);
