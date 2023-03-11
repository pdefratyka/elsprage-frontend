import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromPacketReducer from './packet.reducer';

export interface PacketState {
  packetReducer: fromPacketReducer.PacketState;
}

export const packetReducer: ActionReducerMap<PacketState> = {
  packetReducer: fromPacketReducer.packetReducer,
};

export const getPacketState = createFeatureSelector<PacketState>('packet');

export const getPackets = createSelector(getPacketState, (state) => {
  return state.packetReducer.packets;
});

export const getWordsToAdd = createSelector(getPacketState, (state) => {
  return state.packetReducer.wordsToAdd;
});

export const getAddedWords = createSelector(getPacketState, (state) => {
  return state.packetReducer.addedWords;
});

export const getPacket = createSelector(getPacketState, (state) => {
  return state.packetReducer.selectedPacket;
});
