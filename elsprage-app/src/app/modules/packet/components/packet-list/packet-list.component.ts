import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Packet } from 'src/app/modules/shared/models/packet';

@Component({
  selector: 'app-packet-list',
  templateUrl: './packet-list.component.html',
  styleUrls: ['./packet-list.component.scss'],
})
export class PacketListComponent {
  @Input()
  packets: Packet[];

  @Output()
  packetEdit: EventEmitter<Packet> = new EventEmitter<Packet>();

  @Output()
  packetRemove: EventEmitter<number> = new EventEmitter<number>();

  editPacket(packet: Packet): void {
    this.packetEdit.emit(packet);
  }

  removePacket(packetId: number): void {
    this.packetRemove.emit(packetId);
  }
}