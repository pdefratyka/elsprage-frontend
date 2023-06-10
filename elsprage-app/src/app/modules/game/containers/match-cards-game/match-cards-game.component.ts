import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PacketPageAction, PacketState, getPacket } from 'src/app/modules/packet/store';
import { Packet } from 'src/app/modules/shared/models/packet';
import { MatchCardHelperService } from '../../service/match-card-helper.service';
import { Card } from '../../model/card';
import { GameState } from '../../store/reducers';
import { GamePageAction } from '../../store/actions';
import { GameResult } from 'src/app/modules/shared/models/gameResult';

@Component({
  selector: 'app-match-cards-game',
  templateUrl: './match-cards-game.component.html',
  styleUrls: ['./match-cards-game.component.scss']
})
export class MatchCardsGameComponent implements OnInit {

  cards: Card[] = [];

  constructor(
    private packetStore: Store<PacketState>,
    private gameStore: Store<GameState>,
    private route: ActivatedRoute,
    private readonly router: Router,
    public readonly matchCardService: MatchCardHelperService
  ) {
    this.packetStore.select(getPacket).subscribe(packet => {
      if (packet.words) {
        this.cards = this.matchCardService.getCards(packet);
      }
    })
  }

  ngOnInit(): void {
    this.matchCardService.reloadVariables();
    const packetId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.packetStore.dispatch(PacketPageAction.getPacketById({ packetId }));
  }

  cancelLearning(): void {
    if (confirm("Are you sure you want to quit cards game mode?")) {
      this.router.navigate(['/games']);
    }
  }

  selectCard(card: Card): void {
    this.matchCardService.selectCard(card);
  }

  reloadComponent() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }

  saveScore() {
    const gameResult = {
      packetId: parseInt(this.route.snapshot.paramMap.get('id')),
      gameType: "FIND_CARD",
      score: this.matchCardService.getScore()
    } as GameResult;
    this.gameStore.dispatch(GamePageAction.saveGameResult({ gameResult }))
  }
}
