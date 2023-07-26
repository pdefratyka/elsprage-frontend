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
import { PaperGameComponent } from './containers/paper-game/paper-game.component';
import { PaperGameStartComponent } from './components/paper-game/paper-game-start/paper-game-start.component';
import { PaperGameCompetitionComponent } from './components/paper-game/paper-game-competition/paper-game-competition.component';
import { PaperGameDifferenceComponent } from './components/paper-game/paper-game-difference/paper-game-difference.component';
import { PaperGameSummaryComponent } from './components/paper-game/paper-game-summary/paper-game-summary.component';
import { PaperTopicAddComponent } from './containers/paper-game/paper-topic-add/paper-topic-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaperTagAddComponent } from './containers/paper-game/paper-tag-add/paper-tag-add.component';
import { SingleTopicComponent } from './containers/paper-game/paper-topic-add/single-topic/single-topic.component';
import { PaperGameResultsComponent } from './containers/paper-game/paper-game-results/paper-game-results.component';
import { PaperGameErrorsComponent } from './components/paper-game/paper-game-difference/paper-game-errors/paper-game-errors.component';
import { PaperGameSingleErrorComponent } from './components/paper-game/paper-game-difference/paper-game-errors/paper-game-single-error/paper-game-single-error.component';
import { PaperTopicListComponent } from './containers/paper-game/paper-topic-add/paper-topic-list/paper-topic-list.component';
import { PaperTagsListComponent } from './containers/paper-game/paper-tag-add/paper-tags-list/paper-tags-list.component';
import { PaperSingleResultComponent } from './containers/paper-game/paper-game-results/paper-single-result/paper-single-result.component';
import { PaperResultDetailsComponent } from './containers/paper-game/paper-game-results/paper-result-details/paper-result-details.component';
import { PaperErrorDetailsComponent } from './containers/paper-game/paper-game-results/paper-result-details/paper-error-details/paper-error-details.component';



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
    MatchCardSingleCardComponent,
    PaperGameComponent,
    PaperGameStartComponent,
    PaperGameCompetitionComponent,
    PaperGameDifferenceComponent,
    PaperGameSummaryComponent,
    PaperTopicAddComponent,
    PaperTagAddComponent,
    SingleTopicComponent,
    PaperGameResultsComponent,
    PaperGameErrorsComponent,
    PaperGameSingleErrorComponent,
    PaperTopicListComponent,
    PaperTagsListComponent,
    PaperSingleResultComponent,
    PaperResultDetailsComponent,
    PaperErrorDetailsComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('packet', packetReducer, {}),
    StoreModule.forFeature('game', gameReducer, {}),
    EffectsModule.forFeature(packetEffects),
    EffectsModule.forFeature(gameEffects),
  ]
})
export class GameModule { }
