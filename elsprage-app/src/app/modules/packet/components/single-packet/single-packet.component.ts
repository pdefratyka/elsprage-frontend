import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Packet } from 'src/app/modules/shared/models/packet';

@Component({
  selector: 'app-single-packet',
  templateUrl: './single-packet.component.html',
  styleUrls: ['./single-packet.component.scss'],
})
export class SinglePacketComponent {
  @Input()
  packet: Packet;

  @Output()
  packetEdit: EventEmitter<Packet> = new EventEmitter<Packet>();

  @Output()
  packetRemove: EventEmitter<number> = new EventEmitter<number>();

  editPacket(): void {
    this.packetEdit.emit(this.packet);
  }

  removePacket(): void {
    this.packetRemove.emit(this.packet.id);
  }
}
