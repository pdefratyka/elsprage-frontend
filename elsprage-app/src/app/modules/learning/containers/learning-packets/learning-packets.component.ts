import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LearningPacket } from 'src/app/modules/shared/models/learningPacket';
import { LearningState, getLearningPackets } from '../../store/reducers';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LearningPageAction } from '../../store/actions';

@Component({
  selector: 'app-learning-packets',
  templateUrl: './learning-packets.component.html',
  styleUrls: ['./learning-packets.component.scss']
})
export class LearningPacketsComponent implements OnInit {
  
  learningPackets$: Observable<LearningPacket[]>;

  constructor(private store: Store<LearningState>, private router: Router) {
    this.learningPackets$ = this.store.select(getLearningPackets);
  }

  ngOnInit(): void {
    this.store.dispatch(LearningPageAction.getLearningPackets());
  }
}
