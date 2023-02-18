import { Component } from '@angular/core';
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

  constructor(private store: Store<PacketState>) {
    this.packets$ = this.store.select(getPackets);
  }

  ngOnInit(): void {
    this.store.dispatch(PacketPageAction.getUsersPackets());
  }
}
