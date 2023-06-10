import { Component, Input } from '@angular/core';
import { Card } from '../../../model/card';

@Component({
  selector: 'app-match-card-score',
  templateUrl: './match-card-score.component.html',
  styleUrls: ['./match-card-score.component.scss']
})
export class MatchCardScoreComponent {
  @Input()
  attempts: number;
  @Input()
  guessed: number;
  @Input()
  words: string[];
}
