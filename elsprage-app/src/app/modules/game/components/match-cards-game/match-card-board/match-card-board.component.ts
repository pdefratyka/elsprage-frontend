import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../model/card';

@Component({
  selector: 'app-match-card-board',
  templateUrl: './match-card-board.component.html',
  styleUrls: ['./match-card-board.component.scss']
})
export class MatchCardBoardComponent {

  @Input()
  cards: Card[];
  @Output()
  cardSelection: EventEmitter<Card> = new EventEmitter<Card>();

  constructor() {
  }

  getRange(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }

  getCard(i: number, j: number): Card {
    if (i === 0) {
      return this.cards[j];
    } else if (i === 1) {

    }
    return this.cards[j + (8 * i)];
  }

  selectCard(card: Card): void {
    this.cardSelection.emit(card);
  }
}
