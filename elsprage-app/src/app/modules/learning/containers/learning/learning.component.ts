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
    console.log(this.route.snapshot.paramMap);
    const repetitionMode = this.route.snapshot.paramMap.get('repetition') === 'true' ? true : false;
    this.store.dispatch(LearningPageAction.getPacketsWords({
      packetId: parseInt(this.route.snapshot.paramMap.get('id')),
      learningMode: mode,
      repetitionMode: repetitionMode
    }));
  }

  finishLearning(learningResult: LearningResult): void {
    this.learningResult = learningResult;
    this.learningResult.learningMode = this.selectedMode;
    this.learningResult.packetId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.learningResult.repetition = this.route.snapshot.paramMap.get('repetition') === 'true' ? true : false;
  }

  saveResult(): void {
    this.store.dispatch(LearningPageAction.saveLearningResult({ learningResult: this.learningResult }));
    this.store.dispatch(LearningPageAction.cleanLearningState());
    this.router.navigate(['/learn']);
  }
}
