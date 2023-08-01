import { createReducer, on } from '@ngrx/store';
import { LearningApiAction, LearningPageAction } from '../actions';
import { LearningPacket } from 'src/app/modules/shared/models/learningPacket';
import { LearningWord } from 'src/app/modules/shared/models/learningWord';
import { PacketsFilter } from 'src/app/modules/shared/models/packetsFilter';

export interface LearningState {
  error: string;
  learningPackets: LearningPacket[];
  packetsFilter: PacketsFilter;
  selectedPacket: {
    packetId: number,
    words: LearningWord[]
  }
}

export const initialState: LearningState = {
  error: '',
  learningPackets: [],
  selectedPacket: {
    packetId: null,
    words: []
  },
  packetsFilter: {
    language: ''
  }
};

export const learningReducer = createReducer<LearningState>(
  initialState,

  on(LearningApiAction.getLearningPacketsSuccess, (state, { learningPackets }): LearningState => {
    return {
      ...state,
      learningPackets,
      error: '',
    };
  }),
  on(LearningApiAction.getLearningPacketsFailure, (state, action): LearningState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
  on(LearningApiAction.getPacketsWordsSuccess, (state, action): LearningState => {
    const selectedPacket = {
      packetId: action.packetId,
      words: action.learningWords
    }
    return {
      ...state,
      selectedPacket,
      error: '',
    };
  }),
  on(LearningApiAction.getPacketsWordsFailure, (state, action): LearningState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),

  on(LearningPageAction.cleanLearningState, (state, action): LearningState => {
    return {
      ...state,
      selectedPacket: {
        packetId: state.selectedPacket.packetId,
        words: []
      }
    };
  }),

  on(LearningPageAction.setPacketsFilters, (state, action): LearningState => {
    return {
      ...state,
      packetsFilter: action.packetsFilter
    };
  }),
);
