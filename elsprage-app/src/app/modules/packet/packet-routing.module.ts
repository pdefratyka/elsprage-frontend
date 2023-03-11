import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePacketComponent } from './containers/create-packet/create-packet.component';
import { EditPacketComponent } from './containers/edit-packet/edit-packet.component';
import { PacketsComponent } from './containers/packets/packets.component';

const packetRouts: Routes = [
  { path: 'create', component: CreatePacketComponent },
  { path: ':id', component: EditPacketComponent },
  { path: '', component: PacketsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(packetRouts)],
  exports: [RouterModule],
})
export class PacketRoutingModule {}
