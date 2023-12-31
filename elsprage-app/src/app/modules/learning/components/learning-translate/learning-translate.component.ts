import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LearningResult } from 'src/app/modules/shared/models/learningResult';
import { LearningWord } from 'src/app/modules/shared/models/learningWord';
import { WordRepetition } from 'src/app/modules/shared/models/wordRepetition';

@Component({
  selector: 'app-learning-translate',
  templateUrl: './learning-translate.component.html',
  styleUrls: ['./learning-translate.component.scss']
})
export class LearningTranslateComponent implements OnInit {

  @Input()
  learningWords: LearningWord[];
  @Output()
  finishLearning: EventEmitter<LearningResult> = new EventEmitter<LearningResult>();
  learningWordIndex: number = 0;
  numberOfWords = 0;
  numberOfCorrectAnswers: number = 0;
  numberOfAttempts: number = 0;
  repetitions: Map<number, number> = new Map<number, number>();

  ngOnInit(): void {
    for (let i = 0; i < this.learningWords.length; i++) {
      this.repetitions.set(this.learningWords[i].wordId, 0);
    }
    this.numberOfWords = this.learningWords.length;
  }

  selectNextWord(result: boolean): void {
    if (result) {
      const newLearningWords = [...this.learningWords];
      newLearningWords.splice(this.learningWordIndex, 1);
      this.learningWords = newLearningWords;
    } else {
      this.repetitions.set(this.learningWords[this.learningWordIndex].wordId, this.repetitions.get(this.learningWords[this.learningWordIndex].wordId) + 1);
      this.learningWordIndex++;
    }
    if (this.learningWordIndex >= this.learningWords.length) {
      this.learningWordIndex = 0;
    }
    if (this.learningWords.length === 0) {
      this.emitFinishLearning();
    }
  }

  checkAnswer(correctAnswer: boolean): void {
    this.numberOfAttempts++;
    if (correctAnswer) {
      this.numberOfCorrectAnswers++;
    }
  }

  emitFinishLearning(): void {
    const wordRepetition: WordRepetition[] = Array.from(this.repetitions.entries()).map(([key, value]) => ({
      wordId: key,
      numberOfRepetitions: value
    } as WordRepetition));
    this.finishLearning.emit({
      score: 100 * this.numberOfCorrectAnswers / this.numberOfAttempts,
      repetitions: wordRepetition
    } as LearningResult)
  }
}
