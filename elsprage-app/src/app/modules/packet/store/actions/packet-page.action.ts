import { createAction, props } from '@ngrx/store';
import { PacketRequest } from 'src/app/modules/shared/models/requests/packet-request';
import { Word } from 'src/app/modules/shared/models/word';

const PACKET_PAGE = 'Packet Page';

export const savePacket = createAction(
  `[${PACKET_PAGE}] Save Packet`,
  props<{ packetRequest: PacketRequest }>()
);

export const getUsersPackets = createAction(`[${PACKET_PAGE}] Get Packets`);

export const addWordToPacket = createAction(
  `[${PACKET_PAGE}] Add Word To Packet`,
  props<{ word: Word }>()
);

export const removeWordFromPacket = createAction(
  `[${PACKET_PAGE}] Remove Word From Packet`
);

export const initCreatePacket = createAction(
  `[${PACKET_PAGE}] Init Create Packet`,
  props<{ wordsToAdd: Word[] }>()
);

export const initReloadWordsToAdd = createAction(
  `[${PACKET_PAGE}] Init Reload Words To Add`,
  props<{ wordsToAdd: Word[] }>()
);
