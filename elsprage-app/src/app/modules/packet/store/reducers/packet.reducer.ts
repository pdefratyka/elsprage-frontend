import { createReducer, on } from '@ngrx/store';
import { Packet } from 'src/app/modules/shared/models/packet';
import { PacketApiAction } from '../actions';

export interface PacketState {
  error: string;
  packets: Packet[];
}

export const initialState: PacketState = {
  error: '',
  packets: [],
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
  })
);
