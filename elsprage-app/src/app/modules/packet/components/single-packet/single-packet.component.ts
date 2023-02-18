import { Component, Input } from '@angular/core';
import { Packet } from 'src/app/modules/shared/models/packet';

@Component({
  selector: 'app-single-packet',
  templateUrl: './single-packet.component.html',
  styleUrls: ['./single-packet.component.scss'],
})
export class SinglePacketComponent {
  @Input()
  packet: Packet;
}
