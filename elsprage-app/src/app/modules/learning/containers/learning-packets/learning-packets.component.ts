import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { LearningPacket } from 'src/app/modules/shared/models/learningPacket';
import { LearningState, getLearningPacket, getLearningPackets, getPacketsFilter } from '../../store/reducers';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { LearningPageAction } from '../../store/actions';
import { PacketsFilter } from 'src/app/modules/shared/models/packetsFilter';

@Component({
  selector: 'app-learning-packets',
  templateUrl: './learning-packets.component.html',
  styleUrls: ['./learning-packets.component.scss']
})
export class LearningPacketsComponent implements OnInit {

  learningPackets$: Observable<LearningPacket[]>;
  currentLearningPacketId$: Observable<number>;
  packetsFilter$: Observable<PacketsFilter>;

  constructor(private store: Store<LearningState>) {
    this.learningPackets$ = this.store.select(getLearningPackets);
    this.currentLearningPacketId$ = this.store.select(getLearningPacket);
    this.packetsFilter$ = this.store.select(getPacketsFilter);
  }

  ngOnInit(): void {
    this.updateLearningPackets();
  }

  selectLanguage(language: string): void {
    this.store.dispatch(LearningPageAction.setPacketsFiltersLanguage({ language }));
    this.updateLearningPackets();
  }

  changeRepeatsMode(): void {
    this.store.dispatch(LearningPageAction.setPacketsFiltersRepeatsMode());
    this.updateLearningPackets();
  }

  changeScore100Mode(): void {
    this.store.dispatch(LearningPageAction.setPacketsFiltersScoreNot100());
    this.updateLearningPackets();
  }

  updateLearningPackets(): void {
    this.store.pipe(select(getPacketsFilter), take(1)).subscribe(packetsFilter => {
      this.store.dispatch(LearningPageAction.getLearningPackets({ packetsFilter }));
    })
  }
}
