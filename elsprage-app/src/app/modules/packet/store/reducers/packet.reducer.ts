import { createReducer, on } from '@ngrx/store';
import { Packet } from 'src/app/modules/shared/models/packet';
import { Word } from 'src/app/modules/shared/models/word';
import { PacketApiAction, PacketPageAction } from '../actions';

export interface PacketState {
  error: string;
  packets: Packet[];
  addedWords: Word[];
  wordsToAdd: Word[];
}

export const initialState: PacketState = {
  error: '',
  packets: [],
  wordsToAdd: [],
  addedWords: [],
};

export const packetReducer = createReducer<PacketState>(
  initialState,
  on(PacketApiAction.savePacketSuccess, (state, action): PacketState => {
    return {
      ...state,
      error: '',
    };
  }),
  on(PacketApiAction.savePacketFailure, (state, action): PacketState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
  on(PacketApiAction.getUsersPacketsSuccess, (state, action): PacketState => {
    return {
      ...state,
      packets: action.usersPacketsResponse.packets,
      error: '',
    };
  }),
  on(PacketApiAction.getUsersPacketsFailure, (state, action): PacketState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
  on(PacketPageAction.addWordToPacket, (state, action): PacketState => {
    const tempAddedWords = [...state.addedWords];
    const tempWordsToAdd = [...state.wordsToAdd];
    tempAddedWords.push(action.word);
    const index = tempWordsToAdd.findIndex((w) => w.id === action.word.id);
    tempWordsToAdd.splice(index, 1);
    return {
      ...state,
      addedWords: tempAddedWords,
      wordsToAdd: tempWordsToAdd,
      error: '',
    };
  }),
  on(PacketPageAction.initCreatePacket, (state, action): PacketState => {
    return {
      ...state,
      addedWords: [],
      wordsToAdd: action.wordsToAdd,
      error: '',
    };
  }),
  on(PacketPageAction.initReloadWordsToAdd, (state, action): PacketState => {
    return {
      ...state,
      wordsToAdd: action.wordsToAdd,
      error: '',
    };
  })
);
