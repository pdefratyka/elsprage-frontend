import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LearningMode } from 'src/app/modules/shared/models/learningMode';
import { LearningState, getLearningWords } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { LearningPageAction } from '../../store/actions';
import { Observable } from 'rxjs';
import { LearningWord } from 'src/app/modules/shared/models/learningWord';
import { LearningResult } from 'src/app/modules/shared/models/learningResult';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent {
  selectedMode: LearningMode = null;
  learningWords$: Observable<LearningWord[]>;
  learningResult: LearningResult;

  constructor(private readonly router: Router, private store: Store<LearningState>, private route: ActivatedRoute) {
    this.learningWords$ = this.store.select(getLearningWords);
  }

  cancelLearning(): void {
    if (confirm("Are you sure you want to quit learning mode?")) {
      this.router.navigate(['/learn']);
    }
  }

  selectMode(mode: LearningMode): void {
    this.selectedMode = mode;
    this.store.dispatch(LearningPageAction.getPacketsWords({ packetId: parseInt(this.route.snapshot.paramMap.get('id')), learningMode: mode }));
  }

  finishLearning(learningResult: LearningResult): void {
    this.learningResult = learningResult;
    this.learningResult.mode = this.selectedMode;
    this.learningResult.packetId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  saveResult(): void {
    this.store.dispatch(LearningPageAction.saveLearningResult({ learningResult: this.learningResult }));
    this.router.navigate(['/learn']);
  }
}
