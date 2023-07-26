import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameState, getPaperResults } from '../../../store/reducers';
import { Store } from '@ngrx/store';
import { GamePageAction } from '../../../store/actions';
import { PaperResult } from 'src/app/modules/shared/models/paperResult';

@Component({
  selector: 'app-paper-game-results',
  templateUrl: './paper-game-results.component.html',
  styleUrls: ['./paper-game-results.component.scss']
})
export class PaperGameResultsComponent {
  paperResults: PaperResult[];
  constructor(private readonly router: Router,
    private gameStore: Store<GameState>) {
    this.gameStore.select(getPaperResults).subscribe(results => {
      this.paperResults = results;
    })
  }

  ngOnInit(): void {
    this.gameStore.dispatch(GamePageAction.getPaperResults());
  }

  cancelLearning(): void {
    this.router.navigate(['/games/paper']);
  }
}
