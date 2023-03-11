import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Packet } from 'src/app/modules/shared/models/packet';
import { getPackets, PacketPageAction } from '../../store';
import { PacketState } from '../../store/reducers/packet.reducer';

@Component({
  selector: 'app-packets',
  templateUrl: './packets.component.html',
  styleUrls: ['./packets.component.scss'],
})
export class PacketsComponent {
  packets$: Observable<Packet[]>;

  constructor(private store: Store<PacketState>, private router: Router) {
    this.packets$ = this.store.select(getPackets);
  }

  ngOnInit(): void {
    this.store.dispatch(PacketPageAction.getUsersPackets());
  }

  editPacket(packet: Packet): void {
    this.router.navigate(['/packets/' + packet.id]);
  }

  removePacket(packetId: number): void {
    this.store.dispatch(PacketPageAction.removePacket({ packetId }));
  }
}
