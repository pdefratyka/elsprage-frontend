import { Component, Input } from '@angular/core';
import { LearningPacket } from 'src/app/modules/shared/models/learningPacket';

@Component({
  selector: 'app-learning-packets-list',
  templateUrl: './learning-packets-list.component.html',
  styleUrls: ['./learning-packets-list.component.scss']
})
export class LearningPacketsListComponent {
  @Input()
  learningPackets: LearningPacket[];
}
