import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PaperStartGameParameteres } from '../../../model/paperStartGameParameters';

@Component({
  selector: 'app-paper-game-competition',
  templateUrl: './paper-game-competition.component.html',
  styleUrls: ['./paper-game-competition.component.scss']
})
export class PaperGameCompetitionComponent {
  @Input()
  gameParameters: PaperStartGameParameteres;
  @Output()
  paperCheck: EventEmitter<string> = new EventEmitter<string>;
  @ViewChild('paperText') paperText: ElementRef<HTMLInputElement>;
  numberOfWords: number = 0;

  timeInSeconds(): number {
    return this.gameParameters.mode.durationInMinutes * 60;
  }

  checkText(): void {
    const paperText = this.paperText.nativeElement.value;
    this.paperCheck.emit(paperText);
  }

  onPaperTextInput(): void {
    const paperText = this.paperText.nativeElement.value;
    this.numberOfWords = paperText.split(" ").length
  }
}
