import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundEffectService {

  correctAnswerAudio: HTMLAudioElement;
  wrongAnswerAudio: HTMLAudioElement;

  constructor() {
    this.initiateCorrectAnswerAudio();
    this.initiateWrongAnswerAudio();
  }

  playCorrectAnswer(): void {
    this.correctAnswerAudio.play();
  }

  playWrongAnswer(): void {
    this.wrongAnswerAudio.play();
  };

  private initiateCorrectAnswerAudio(): void {
    this.correctAnswerAudio = new Audio();
    this.correctAnswerAudio.src = "../../../assets/sounds/correct-answer.mp3";
    this.correctAnswerAudio.load();
  }

  private initiateWrongAnswerAudio(): void {
    this.wrongAnswerAudio = new Audio();
    this.wrongAnswerAudio.src = "../../../assets/sounds/wrong-answer.mp3";
    this.wrongAnswerAudio.load();
  }
}
