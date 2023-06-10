import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GameState, getGamePackets } from '../../store/reducers';
import { GamePacket } from 'src/app/modules/shared/models/gamePacket';
import { GamePageAction } from '../../store/actions';

@Component({
  selector: 'app-cards-game',
  templateUrl: './game-packets-list-container.component.html',
  styleUrls: ['./game-packets-list-container.component.scss']
})
export class GamePacketsListContainerComponent {

  gamePackets$: Observable<GamePacket[]>;

  constructor(private store: Store<GameState>, private readonly router: Router) {
    this.gamePackets$ = this.store.select(getGamePackets);
  }

  ngOnInit(): void {
    this.store.dispatch(GamePageAction.getGamePackets({ gameType: "FIND_CARD" }));
  }

  cancelLearning(): void {
    if (confirm("Are you sure you want to quit cards game mode?")) {
      this.router.navigate(['/games']);
    }
  }

  selectPacket(gamePacket: GamePacket): void {
    this.router.navigate(['/games/cards/' + gamePacket.packetId]);
  }
}
