import { Component, Input } from '@angular/core';
import { LearningPacket } from 'src/app/modules/shared/models/learningPacket';

@Component({
  selector: 'app-single-learning-packet',
  templateUrl: './single-learning-packet.component.html',
  styleUrls: ['./single-learning-packet.component.scss']
})
export class SingleLearningPacketComponent {
  @Input()
  learningPacket: LearningPacket;
}
