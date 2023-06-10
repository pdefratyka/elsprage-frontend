import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListContainerComponent } from './containers/games-list/games-list-container.component';
import { GamePacketsListContainerComponent } from './containers/game-packets-list/game-packets-list-container.component';
import { MatchCardsGameComponent } from './containers/match-cards-game/match-cards-game.component';

const gameRoutes: Routes = [
  { path: 'cards', component: GamePacketsListContainerComponent },
  { path: 'cards/:id', component: MatchCardsGameComponent },
  { path: '', component: GamesListContainerComponent }
]

@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule],
})
export class GameRoutingModule { }
