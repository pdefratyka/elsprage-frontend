import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromLearningReducer from './learning.reducer';

export interface LearningState {
  learningReducer: fromLearningReducer.LearningState;
}

export const learningReducer: ActionReducerMap<LearningState> = {
  learningReducer: fromLearningReducer.learningReducer,
};

export const getLearningState = createFeatureSelector<LearningState>('learning');


export const getLearningPackets = createSelector(getLearningState, (state) => {
  return state.learningReducer.learningPackets;
});

export const getLearningWords = createSelector(getLearningState, (state) => {
  return state.learningReducer.selectedPacket.words;
});

export const getLearningPacket = createSelector(getLearningState, (state) => {
  return state.learningReducer.selectedPacket.packetId;
});

export const getPacketsFilter = createSelector(getLearningState, (state) => {
  return state.learningReducer.packetsFilter;
});