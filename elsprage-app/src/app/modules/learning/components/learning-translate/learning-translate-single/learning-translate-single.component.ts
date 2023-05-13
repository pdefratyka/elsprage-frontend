import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SoundEffectService } from 'src/app/modules/core/services/helper/sound-effect.service';
import { LearningWord } from 'src/app/modules/shared/models/learningWord';

@Component({
  selector: 'app-learning-translate-single',
  templateUrl: './learning-translate-single.component.html',
  styleUrls: ['./learning-translate-single.component.scss']
})
export class LearningTranslateSingleComponent implements OnInit {

  @ViewChild('yourAnswer', { static: false }) yourAnswer: ElementRef;

  @Input()
  learningWord: LearningWord;

  @Input()
  answerLanguage: string;

  @Output()
  nextWord: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  answerCheck: EventEmitter<boolean> = new EventEmitter<boolean>();

  correctAnswer: boolean = false;
  checkedAnswer: boolean = false;

  constructor(private readonly soundEffectService: SoundEffectService) {

  }

  ngOnInit(): void {
  }

  selectNextWord(): void {
    this.nextWord.emit(this.correctAnswer);
    this.correctAnswer = false;
    this.checkedAnswer = false;
    this.yourAnswer.nativeElement.value = '';
  }

  checkAnswer(): void {
    let possibleAnswers = this.learningWord.answer.split(';');
    possibleAnswers = possibleAnswers.map(answer => answer.toUpperCase());
    let yourAnswer = this.getYourAnswer().toUpperCase();
    if (possibleAnswers.includes(yourAnswer)) {
      this.correctAnswer = true;
      this.soundEffectService.playCorrectAnswer();
    } else {
      this.correctAnswer = false;
      this.soundEffectService.playWrongAnswer();
    }
    this.checkedAnswer = true;
    this.answerCheck.emit(this.correctAnswer);
  }

  private getYourAnswer(): string {
    return this.yourAnswer.nativeElement.value;
  }

  handleOnEnter(): void {
    if (!this.checkedAnswer) {
      this.checkAnswer();
    } else {
      this.selectNextWord();
    }
  }

  onGermanKeySelect(key: string): void {
    this.yourAnswer.nativeElement.value = this.yourAnswer.nativeElement.value + key;
    this.yourAnswer.nativeElement.focus();
  }

}
