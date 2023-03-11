import { createAction, props } from '@ngrx/store';
import { Packet } from 'src/app/modules/shared/models/packet';
import { UsersPacketsResponse } from 'src/app/modules/shared/models/responses/users-packets-response';

const PACKET_API = 'Packet API';

export const savePacketSuccess = createAction(
  `[${PACKET_API}] Save Packet Success`,
  props<{ packet: Packet }>()
);

export const savePacketFailure = createAction(
  `[${PACKET_API}] Save Packet Failure`,
  props<{ error: Error }>()
);

export const getUsersPacketsSuccess = createAction(
  `[${PACKET_API}] Get Packets Success`,
  props<{ usersPacketsResponse: UsersPacketsResponse }>()
);

export const getUsersPacketsFailure = createAction(
  `[${PACKET_API}] Get Packets Failure`,
  props<{ error: Error }>()
);

export const getPacketByIdSuccess = createAction(
  `[${PACKET_API}] Get Packets By Id Success`,
  props<{ packet: Packet }>()
);

export const getPacketByIdFailure = createAction(
  `[${PACKET_API}] Get Packet By Id Failure`,
  props<{ error: Error }>()
);

export const removePacketSuccess = createAction(
  `[${PACKET_API}] Remove Packet Success`,
  props<{ packetId: number }>()
);

export const removePacketFailure = createAction(
  `[${PACKET_API}] Remove Packet Failure`,
  props<{ error: Error }>()
);
