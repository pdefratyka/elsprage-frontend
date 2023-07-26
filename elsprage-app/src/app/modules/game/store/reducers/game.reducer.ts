import { createReducer, on } from '@ngrx/store';
import { GamePacket } from 'src/app/modules/shared/models/gamePacket';
import { GameApiAction } from '../actions';
import { Tag } from 'src/app/modules/shared/models/tag';
import { Topic } from 'src/app/modules/shared/models/topic';
import { PaperResult } from 'src/app/modules/shared/models/paperResult';
import { PaperMode } from 'src/app/modules/shared/models/paperMode';

export interface GameState {
  error: string;
  gamePackets: GamePacket[];
  tags: Tag[];
  topics: Topic[];
  paperResults: PaperResult[];
  savedPaperResults: PaperResult;
  paperModes: PaperMode[];
  singlePaperResult: PaperResult;
}

export const initialState: GameState = {
  error: '',
  gamePackets: [],
  tags: [],
  topics: [],
  paperResults: [],
  savedPaperResults: null,
  paperModes: [],
  singlePaperResult: null
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
  }),
  on(GameApiAction.getTagsSuccess, (state, { tags }): GameState => {
    return {
      ...state,
      tags,
      error: '',
    };
  }),
  on(GameApiAction.getTagsFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
  on(GameApiAction.saveTagSuccess, (state, { tag }): GameState => {
    let tempTags = [...state.tags];
    tempTags.push(tag);
    return {
      ...state,
      tags: tempTags,
      error: '',
    };
  }),
  on(GameApiAction.getTagsFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),

  on(GameApiAction.getTopicsSuccess, (state, { topics }): GameState => {
    return {
      ...state,
      topics,
      error: '',
    };
  }),
  on(GameApiAction.getTopicsFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),

  on(GameApiAction.saveTopicSuccess, (state, { topic }): GameState => {
    let tempTopic = [...state.topics];
    tempTopic.push(topic);
    return {
      ...state,
      topics: tempTopic,
      error: '',
    };
  }),
  on(GameApiAction.saveTopicFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),

  on(GameApiAction.savePaperResultSuccess, (state, { paperResult }): GameState => {
    return {
      ...state,
      savedPaperResults: paperResult,
      error: '',
    };
  }),
  on(GameApiAction.savePaperResultFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),

  on(GameApiAction.getPaperResultsSuccess, (state, { paperResults }): GameState => {
    return {
      ...state,
      paperResults: paperResults,
      error: '',
    };
  }),
  on(GameApiAction.getPaperResultsFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),

  on(GameApiAction.getPaperModesSuccess, (state, { paperModes }): GameState => {
    return {
      ...state,
      paperModes: paperModes,
      error: '',
    };
  }),
  on(GameApiAction.getPaperModesFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),

  on(GameApiAction.deleteTopicSuccess, (state, { topicId }): GameState => {
    const topics = state.topics.filter((t) => t.id !== topicId);
    return {
      ...state,
      topics: topics,
      error: '',
    };
  }),
  on(GameApiAction.deleteTopicFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),

  on(GameApiAction.deleteTagSuccess, (state, { tagId }): GameState => {
    const tags = state.tags.filter((t) => t.id !== tagId);
    return {
      ...state,
      tags: tags,
      error: '',
    };
  }),
  on(GameApiAction.deleteTagFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),

  on(GameApiAction.getSinglePaperResultSuccess, (state, { paperResult }): GameState => {
    return {
      ...state,
      singlePaperResult: paperResult,
      error: '',
    };
  }),
  on(GameApiAction.getSinglePaperResultFailure, (state, action): GameState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
);
