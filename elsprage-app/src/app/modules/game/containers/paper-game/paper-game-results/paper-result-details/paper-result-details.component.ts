import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GamePageAction } from 'src/app/modules/game/store/actions';
import { GameState, getSinglePaperResult } from 'src/app/modules/game/store/reducers';
import { PaperResult } from 'src/app/modules/shared/models/paperResult';

@Component({
  selector: 'app-paper-result-details',
  templateUrl: './paper-result-details.component.html',
  styleUrls: ['./paper-result-details.component.scss']
})
export class PaperResultDetailsComponent implements OnInit {
  paperResult$: Observable<PaperResult>

  constructor(private store: Store<GameState>, private route: ActivatedRoute, private readonly router: Router) {
    this.paperResult$ = this.store.select(getSinglePaperResult);
  }

  ngOnInit(): void {
    const paperResultId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(GamePageAction.getSinglePaperResult({ paperResultId }))
  }

  cancelLearning(): void {
    this.router.navigate(['/games/paper']);
  }
}
