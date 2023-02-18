import { createAction, props } from '@ngrx/store';
import { Packet } from 'src/app/modules/shared/models/packet';
import { PacketRequest } from 'src/app/modules/shared/models/requests/packet-request';

const PACKET_PAGE = 'Packet Page';

export const savePacket = createAction(
  `[${PACKET_PAGE}] Save Packet`,
  props<{ packetRequest: PacketRequest }>()
);

export const getUsersPackets = createAction(`[${PACKET_PAGE}] Get Packets`);
