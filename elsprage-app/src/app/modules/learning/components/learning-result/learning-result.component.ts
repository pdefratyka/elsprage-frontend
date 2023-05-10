import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LearningResult } from 'src/app/modules/shared/models/learningResult';

@Component({
  selector: 'app-learning-result',
  templateUrl: './learning-result.component.html',
  styleUrls: ['./learning-result.component.scss']
})
export class LearningResultComponent {

  @Input()
  learningResult: LearningResult;
  @Output()
  resultSave: EventEmitter<void> = new EventEmitter<void>();

  saveResult(): void {
    this.resultSave.emit();
  }
}
