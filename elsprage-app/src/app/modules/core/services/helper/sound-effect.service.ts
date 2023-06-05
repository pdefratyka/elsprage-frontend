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

  play(audioData: string): void {
    console.log("Play sound");
    const byteCharacters = atob(audioData); // Decode the base64 string
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const audioByteArray = new Uint8Array(byteNumbers);
    this.playAudioFromByteArray(audioByteArray);
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

  private playAudioFromByteArray(byteArray: Uint8Array) {
    const audioContext = new AudioContext();
    audioContext.decodeAudioData(byteArray.buffer, (audioBuffer) => {
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
    });
  }
}
