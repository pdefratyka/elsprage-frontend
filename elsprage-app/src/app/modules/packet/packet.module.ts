import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePacketComponent } from './containers/create-packet/create-packet.component';
import { PacketRoutingModule } from './packet-routing.module';
import { PacketsComponent } from './containers/packets/packets.component';
import { PacketListComponent } from './components/packet-list/packet-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { packetEffects, packetReducer } from './store';
import { SinglePacketComponent } from './components/single-packet/single-packet.component';
import { SharedModule } from '../shared/shared.module';
import { PacketFormComponent } from './components/packet-form/packet-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { wordEffects, wordReducer } from '../word/store';
import { EditPacketComponent } from './containers/edit-packet/edit-packet.component';
import { EditPacketFormComponent } from './components/edit-packet-form/edit-packet-form.component';
@NgModule({
  declarations: [
    CreatePacketComponent,
    PacketsComponent,
    PacketListComponent,
    SinglePacketComponent,
    PacketFormComponent,
    EditPacketComponent,
    EditPacketFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PacketRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('packet', packetReducer, {}),
    StoreModule.forFeature('word', wordReducer, {}),
    EffectsModule.forFeature(packetEffects),
    EffectsModule.forFeature(wordEffects),
  ],
})
export class PacketModule {}
