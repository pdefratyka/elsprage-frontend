import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListContainerComponent } from './containers/games-list/games-list-container.component';
import { GamePacketsListContainerComponent } from './containers/game-packets-list/game-packets-list-container.component';
import { MatchCardsGameComponent } from './containers/match-cards-game/match-cards-game.component';
import { PaperGameComponent } from './containers/paper-game/paper-game.component';
import { PaperTopicAddComponent } from './containers/paper-game/paper-topic-add/paper-topic-add.component';
import { PaperTagAddComponent } from './containers/paper-game/paper-tag-add/paper-tag-add.component';
import { PaperGameResultsComponent } from './containers/paper-game/paper-game-results/paper-game-results.component';
import { PaperResultDetailsComponent } from './containers/paper-game/paper-game-results/paper-result-details/paper-result-details.component';

const gameRoutes: Routes = [
  { path: 'cards', component: GamePacketsListContainerComponent },
  { path: 'cards/:id', component: MatchCardsGameComponent },
  { path: 'paper', component: PaperGameComponent },
  { path: 'paper/topics/add', component: PaperTopicAddComponent },
  { path: 'paper/tags/add', component: PaperTagAddComponent },
  { path: 'paper/results', component: PaperGameResultsComponent },
  { path: 'paper/results/:id', component: PaperResultDetailsComponent },
  { path: '', component: GamesListContainerComponent }
]

@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule],
})
export class GameRoutingModule { }
