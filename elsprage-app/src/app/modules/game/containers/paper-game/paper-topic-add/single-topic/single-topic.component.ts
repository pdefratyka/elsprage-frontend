import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topic } from 'src/app/modules/shared/models/topic';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.scss']
})
export class SingleTopicComponent {
  @Input()
  topic: Topic;
  @Output()
  topicRemove: EventEmitter<number> = new EventEmitter<number>();


  removeTopic(): void {
    this.topicRemove.emit(this.topic.id);
  }
}
