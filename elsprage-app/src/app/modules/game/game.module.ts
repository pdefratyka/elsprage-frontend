import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePacketsListContainerComponent } from './containers/game-packets-list/game-packets-list-container.component';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GamesListContainerComponent } from './containers/games-list/games-list-container.component';
import { GameSelectorComponent } from './components/game-selector/game-selector.component';
import { GamePacketSelectorComponent } from './components/game-packet-selector/game-packet-selector.component';
import { PacketListComponent } from './components/packet-list/packet-list.component';
import { SinglePacketComponent } from './components/single-packet/single-packet.component';
import { StoreModule } from '@ngrx/store';
import { packetEffects, packetReducer } from '../packet/store';
import { EffectsModule } from '@ngrx/effects';
import { MatchCardsGameComponent } from './containers/match-cards-game/match-cards-game.component';
import { MatchCardBoardComponent } from './components/match-cards-game/match-card-board/match-card-board.component';
import { MatchCardScoreComponent } from './components/match-cards-game/match-card-score/match-card-score.component';
import { MatchCardSingleCardComponent } from './components/match-cards-game/match-card-single-card/match-card-single-card.component';
import { gameReducer } from './store/reducers';
import { gameEffects } from './store/effects';



@NgModule({
  declarations: [
    GamePacketsListContainerComponent,
    GamesListContainerComponent,
    GameSelectorComponent,
    GamePacketSelectorComponent,
    PacketListComponent,
    SinglePacketComponent,
    MatchCardsGameComponent,
    MatchCardBoardComponent,
    MatchCardScoreComponent,
    MatchCardSingleCardComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    StoreModule.forFeature('packet', packetReducer, {}),
    StoreModule.forFeature('game', gameReducer, {}),
    EffectsModule.forFeature(packetEffects),
    EffectsModule.forFeature(gameEffects),
  ]
})
export class GameModule { }
