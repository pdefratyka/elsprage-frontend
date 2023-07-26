import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Topic } from 'src/app/modules/shared/models/topic';
import { PaperStartGameParameteres } from '../../../model/paperStartGameParameters';
import { PaperMode } from 'src/app/modules/shared/models/paperMode';

@Component({
  selector: 'app-paper-game-start',
  templateUrl: './paper-game-start.component.html',
  styleUrls: ['./paper-game-start.component.scss']
})
export class PaperGameStartComponent {
  @Input()
  topics: Topic[];
  @Input()
  paperModes: PaperMode[];
  @Output()
  gameStart: EventEmitter<PaperStartGameParameteres> = new EventEmitter<PaperStartGameParameteres>();
  @ViewChild('languageSelector') languageSelector: ElementRef<HTMLInputElement>;;
  @ViewChild('modeSelector') modeSelector: ElementRef<HTMLInputElement>;;
  @ViewChild('topicSelector') topicSelector: ElementRef<HTMLInputElement>;
  isSubmitDisabled = true;

  startGame(): void {
    let topicId = parseInt(this.topicSelector.nativeElement.value);
    if (topicId < 0) {
      topicId = this.getRandomTopic();
    }
    const mode = this.paperModes.find(p => p.id.toString() === this.modeSelector.nativeElement.value);
    const language = this.languageSelector.nativeElement.value;
    this.gameStart.emit({
      language: language,
      mode: mode,
      topic: this.topics.find(topic => topic.id === topicId)
    } as PaperStartGameParameteres);
  }

  getRandomTopic(): number {
    const topicsIds = this.topics.map(t => t.id);
    return topicsIds[Math.floor(Math.random() * topicsIds.length)];
  }

  onSelectChange(): void {
    this.isSubmitDisabled = this.languageSelector.nativeElement.value === '' ||
      this.modeSelector.nativeElement.value === '' ||
      this.topicSelector.nativeElement.value === '';
  }
}
