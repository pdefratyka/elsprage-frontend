import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePacketComponent } from './containers/create-packet/create-packet.component';
import { PacketsComponent } from './containers/packets/packets.component';

const packetRouts: Routes = [
  { path: 'create', component: CreatePacketComponent },
  { path: '', component: PacketsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(packetRouts)],
  exports: [RouterModule],
})
export class PacketRoutingModule {}
