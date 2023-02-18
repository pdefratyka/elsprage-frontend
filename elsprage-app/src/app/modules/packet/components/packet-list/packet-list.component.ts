import { Component, Input } from '@angular/core';
import { Packet } from 'src/app/modules/shared/models/packet';

@Component({
  selector: 'app-packet-list',
  templateUrl: './packet-list.component.html',
  styleUrls: ['./packet-list.component.scss'],
})
export class PacketListComponent {
  @Input()
  packets: Packet[];
}
