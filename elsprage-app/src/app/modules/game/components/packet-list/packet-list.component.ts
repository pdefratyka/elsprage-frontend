import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GamePacket } from 'src/app/modules/shared/models/gamePacket';
import { Packet } from 'src/app/modules/shared/models/packet';

@Component({
  selector: 'app-packet-list',
  templateUrl: './packet-list.component.html',
  styleUrls: ['./packet-list.component.scss']
})
export class PacketListComponent {
  @Input()
  gamePackets: GamePacket[];
  @Output()
  packetSelection: EventEmitter<GamePacket> = new EventEmitter<GamePacket>();

  selectPacket(gamePacket: GamePacket): void {
    this.packetSelection.emit(gamePacket);
  }
}
