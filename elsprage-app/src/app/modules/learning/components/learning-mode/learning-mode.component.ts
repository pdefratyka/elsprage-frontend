import { Component, EventEmitter, Output } from '@angular/core';
import { LearningMode } from 'src/app/modules/shared/models/learningMode';

@Component({
  selector: 'app-learning-mode',
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.scss']
})
export class LearningModeComponent {
  @Output()
  learningModeSelection: EventEmitter<LearningMode> = new EventEmitter<LearningMode>();
  learningMode = LearningMode;

  selectMode(mode: LearningMode): void {
    this.learningModeSelection.emit(mode);
  }
}
