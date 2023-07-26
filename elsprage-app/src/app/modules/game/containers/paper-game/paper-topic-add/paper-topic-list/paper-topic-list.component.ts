import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topic } from 'src/app/modules/shared/models/topic';

@Component({
  selector: 'app-paper-topic-list',
  templateUrl: './paper-topic-list.component.html',
  styleUrls: ['./paper-topic-list.component.scss']
})
export class PaperTopicListComponent {
  @Input()
  topics: Topic[];
  @Output()
  topicRemove: EventEmitter<number> = new EventEmitter<number>();

  removeTopic(topicId: number): void {
    this.topicRemove.emit(topicId);
  }
}
