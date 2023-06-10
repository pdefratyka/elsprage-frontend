import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GamePacket } from 'src/app/modules/shared/models/gamePacket';

@Component({
  selector: 'app-game-packet-selector',
  templateUrl: './game-packet-selector.component.html',
  styleUrls: ['./game-packet-selector.component.scss']
})
export class GamePacketSelectorComponent {
  @Input()
  gamePackets: GamePacket[];

  @Output()
  packetSelection: EventEmitter<GamePacket> = new EventEmitter<GamePacket>();

  selectPacket(gamePacket: GamePacket): void {
    this.packetSelection.emit(gamePacket);
  }
}