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
