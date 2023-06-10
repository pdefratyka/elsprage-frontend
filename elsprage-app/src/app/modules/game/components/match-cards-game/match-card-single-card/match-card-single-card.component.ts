import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../model/card';

@Component({
  selector: 'app-match-card-single-card',
  templateUrl: './match-card-single-card.component.html',
  styleUrls: ['./match-card-single-card.component.scss']
})
export class MatchCardSingleCardComponent {
  @Input()
  card: Card;
  @Output()
  cardSelection: EventEmitter<Card> = new EventEmitter<Card>();

  selectCard(): void {
    if (this.card.isVisible) {
      this.cardSelection.emit(this.card);
    }
  }
}
