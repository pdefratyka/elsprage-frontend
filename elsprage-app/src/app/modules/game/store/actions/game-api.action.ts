import { createAction, props } from '@ngrx/store';
import { GamePacket } from 'src/app/modules/shared/models/gamePacket';
import { PaperMode } from 'src/app/modules/shared/models/paperMode';
import { PaperResult } from 'src/app/modules/shared/models/paperResult';
import { Tag } from 'src/app/modules/shared/models/tag';
import { Topic } from 'src/app/modules/shared/models/topic';

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

export const saveTagSuccess = createAction(
  `[${GAME_API}] Save Tag Success`,
  props<{ tag: Tag }>()
);

export const saveTagFailure = createAction(
  `[${GAME_API}] Save Tag Failure`,
  props<{ error: Error }>()
);

export const getTagsSuccess = createAction(
  `[${GAME_API}] Get Tag Success`,
  props<{ tags: Tag[] }>()
);

export const getTagsFailure = createAction(
  `[${GAME_API}] Get Tag Failure`,
  props<{ error: Error }>()
);

export const saveTopicSuccess = createAction(
  `[${GAME_API}] Save Topic Success`,
  props<{ topic: Topic }>()
);

export const saveTopicFailure = createAction(
  `[${GAME_API}] Save Topic Failure`,
  props<{ error: Error }>()
);

export const getTopicsSuccess = createAction(
  `[${GAME_API}] Get Topics Success`,
  props<{ topics: Topic[] }>()
);

export const getTopicsFailure = createAction(
  `[${GAME_API}] Get Topics Failure`,
  props<{ error: Error }>()
);

export const savePaperResultSuccess = createAction(
  `[${GAME_API}] Save Paper Result Success`,
  props<{ paperResult: PaperResult }>()
);

export const savePaperResultFailure = createAction(
  `[${GAME_API}] Save Paper Result Failure`,
  props<{ error: Error }>()
);

export const getPaperResultsSuccess = createAction(
  `[${GAME_API}] Get Paper Results Success`,
  props<{ paperResults: PaperResult[] }>()
);

export const getPaperResultsFailure = createAction(
  `[${GAME_API}] Get Paper Results Failure`,
  props<{ error: Error }>()
);

export const getPaperModesSuccess = createAction(
  `[${GAME_API}] Get Paper Modes Success`,
  props<{ paperModes: PaperMode[] }>()
);

export const getPaperModesFailure = createAction(
  `[${GAME_API}] Get Paper Modes Failure`,
  props<{ error: Error }>()
);

export const deleteTopicSuccess = createAction(
  `[${GAME_API}] Delete Topic Success`,
  props<{ topicId: number }>()
);

export const deleteTopicFailure = createAction(
  `[${GAME_API}] Delete Topic Failure`,
  props<{ error: Error }>()
);

export const deleteTagSuccess = createAction(
  `[${GAME_API}] Delete Tag Success`,
  props<{ tagId: number }>()
);

export const deleteTagFailure = createAction(
  `[${GAME_API}] Delete Tag Failure`,
  props<{ error: Error }>()
);

export const getSinglePaperResultSuccess = createAction(
  `[${GAME_API}] Get Paper Result Success`,
  props<{ paperResult: PaperResult }>()
);

export const getSinglePaperResultFailure = createAction(
  `[${GAME_API}] Get Paper Result Failure`,
  props<{ error: Error }>()
);