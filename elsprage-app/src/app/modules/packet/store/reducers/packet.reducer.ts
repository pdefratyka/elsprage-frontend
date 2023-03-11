import { createReducer, on } from '@ngrx/store';
import { Packet } from 'src/app/modules/shared/models/packet';
import { Word } from 'src/app/modules/shared/models/word';
import { PacketApiAction, PacketPageAction } from '../actions';

export interface PacketState {
  error: string;
  packets: Packet[];
  addedWords: Word[];
  wordsToAdd: Word[];
  selectedPacket: Packet;
}

export const initialState: PacketState = {
  error: '',
  packets: [],
  wordsToAdd: [],
  addedWords: [],
  selectedPacket: {} as Packet,
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
  on(PacketPageAction.removeWordFromPacket, (state, action): PacketState => {
    const tempAddedWords = [...state.addedWords];
    const tempWordsToAdd = [...state.wordsToAdd];
    tempWordsToAdd.push(action.word);
    const index = tempAddedWords.findIndex((w) => w.id === action.word.id);
    tempAddedWords.splice(index, 1);
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
      wordsToAdd: [],
      error: '',
    };
  }),
  on(PacketPageAction.initReloadWordsToAdd, (state, action): PacketState => {
    const tempArray = action.wordsToAdd.filter(
      (w) => !state.addedWords.find((a) => a.id === w.id)
    );
    return {
      ...state,
      wordsToAdd: tempArray,
      error: '',
    };
  }),
  on(PacketApiAction.getPacketByIdSuccess, (state, action): PacketState => {
    const tempArray = action.packet.words.filter(
      (w) => !state.addedWords.find((a) => a.id === w.id)
    );
    return {
      ...state,
      selectedPacket: action.packet,
      addedWords: action.packet.words,
      wordsToAdd: tempArray,
      error: '',
    };
  }),
  on(PacketApiAction.getUsersPacketsFailure, (state, action): PacketState => {
    return {
      ...state,
      error: action.error.message,
    };
  }),
  on(PacketApiAction.removePacketSuccess, (state, action): PacketState => {
    const packets = state.packets.filter((p) => p.id !== action.packetId);
    return {
      ...state,
      packets: packets,
      error: '',
    };
  }),
  on(PacketApiAction.removePacketFailure, (state, action): PacketState => {
    return {
      ...state,
      error: action.error.message,
    };
  })
);
