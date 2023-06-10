import { Component, Input } from '@angular/core';
import { GamePacket } from 'src/app/modules/shared/models/gamePacket';

@Component({
  selector: 'app-single-packet',
  templateUrl: './single-packet.component.html',
  styleUrls: ['./single-packet.component.scss']
})
export class SinglePacketComponent {
  @Input()
  gamePacket: GamePacket;
}
