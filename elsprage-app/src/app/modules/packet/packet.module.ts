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
import { PacketWordListComponent } from './components/packet-form/packet-word-list/packet-word-list.component';
import { PacketWordListToAddComponent } from './components/packet-form/packet-word-list-to-add/packet-word-list-to-add.component';
import { PacketSingleWordComponent } from './components/packet-form/packet-word-list/packet-single-word/packet-single-word.component';
import { PacketWordListToAddSingleWordComponent } from './components/packet-form/packet-word-list-to-add/packet-word-list-to-add-single-word/packet-word-list-to-add-single-word.component';

@NgModule({
  declarations: [
    CreatePacketComponent,
    PacketsComponent,
    PacketListComponent,
    SinglePacketComponent,
    PacketFormComponent,
    PacketWordListComponent,
    PacketWordListToAddComponent,
    PacketSingleWordComponent,
    PacketWordListToAddSingleWordComponent,
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
