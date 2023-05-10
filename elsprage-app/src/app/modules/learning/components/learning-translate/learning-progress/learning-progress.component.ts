import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-learning-progress',
  templateUrl: './learning-progress.component.html',
  styleUrls: ['./learning-progress.component.scss']
})
export class LearningProgressComponent {
  @Input()
  numberOfWords: number;
  @Input()
  numberOfAttempts: number = 0;
  @Input()
  numberOfCorrectAnswers: number = 0;
}
