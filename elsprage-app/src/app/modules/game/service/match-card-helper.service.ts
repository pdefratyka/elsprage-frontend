import { Injectable } from '@angular/core';
import { Packet } from '../../shared/models/packet';
import { Card } from '../model/card';
import { SoundEffectService } from '../../core/services/helper/sound-effect.service';

@Injectable({
  providedIn: 'root'
})
export class MatchCardHelperService {

  constructor(private readonly soundService: SoundEffectService) {

  }

  firstSelectedCard: Card;
  secondSelectedCard: Card;
  fasterClick: boolean;

  guessedWords: string[] = [];
  guessed: number = 0;
  attempts: number = 0;

  reloadVariables(): void {
    this.guessedWords = [];
    this.guessed = 0;
    this.attempts = 0;
    this.firstSelectedCard = null;
    this.secondSelectedCard = null;
    this.fasterClick = false;
  }

  getScore(): number {
    return this.guessed / this.attempts;
  }

  selectCard(card: Card): void {
    // if (!card.isTranslation) {
    //   this.soundService.play(card.audio);
    // }
    if (this.firstSelectedCard != null && this.secondSelectedCard != null) {
      this.resetFirstAndSecondWord();
    }
    if (this.firstSelectedCard == null) {
      this.firstSelectedCard = card;
    } else if (this.firstSelectedCard !== card) {
      this.attempts++;
      this.secondSelectedCard = card;
      this.checkAnswer();
    }
    card.isAnswerVisible = true;
  }

  checkAnswer(): void {
    if (this.firstSelectedCard.wordId === this.secondSelectedCard.wordId) {
      this.soundService.playCorrectAnswer();
      this.firstSelectedCard.isVisible = false;
      this.secondSelectedCard.isVisible = false;
      this.guessed++;
      this.guessedWords.push(`${this.firstSelectedCard.text} - ${this.secondSelectedCard.text}`);
      console.log(this.guessedWords);
    } else {
      const delayInMilliseconds = 1500; // Specify the delay in milliseconds (e.g., 5000 = 5 seconds)

      setTimeout(() => {
        if (!this.fasterClick) {
          this.resetFirstAndSecondWord();
        }
        this.fasterClick = false;
        // Call your desired function after the specified delay
      }, delayInMilliseconds);
    }
  }

  resetFirstAndSecondWord(): void {
    if (this.firstSelectedCard && this.secondSelectedCard) {
      this.firstSelectedCard.isAnswerVisible = false;
      this.secondSelectedCard.isAnswerVisible = false;
      this.firstSelectedCard = null;
      this.secondSelectedCard = null;
    }
  }

  getCards(packet: Packet): Card[] {
    const cards = [];
    let index = 0;
    for (let word of packet.words) {
      const valueCard = {
        identifier: index,
        isAnswerVisible: false,
        isVisible: true,
        text: word.value,
        wordId: word.id,
        isTranslation: false,
        audio: word.audioData
      } as Card;
      cards.push(valueCard);
      index++;
      const translationCard = {
        identifier: index,
        isAnswerVisible: false,
        isVisible: true,
        text: word.translation,
        wordId: word.id,
        isTranslation: true
      } as Card;
      cards.push(translationCard);
      index++;
    }
    return this.shuffleArray(cards);
  }

  getGuessedWords(): string[] {
    return this.guessedWords;
  }

  getAttempts(): number {
    return this.attempts;
  }

  getGuessed(): number {
    return this.guessed;
  }

  private shuffleArray(array: any[]): any[] {
    const newArray = [...array];
    newArray.sort(() => Math.random() - 0.5);
    return newArray;
  }
}
