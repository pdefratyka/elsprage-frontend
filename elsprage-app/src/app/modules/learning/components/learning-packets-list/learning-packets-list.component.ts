import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LearningPacket } from 'src/app/modules/shared/models/learningPacket';
import { PacketsFilter } from 'src/app/modules/shared/models/packetsFilter';

@Component({
  selector: 'app-learning-packets-list',
  templateUrl: './learning-packets-list.component.html',
  styleUrls: ['./learning-packets-list.component.scss']
})
export class LearningPacketsListComponent {
  @Input()
  learningPackets: LearningPacket[];
  @Input()
  currentLearningPacketId: number;
  @Input()
  packetsFilter: PacketsFilter;
  @Output()
  languageSelection: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  repeatsModeChange: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  scoreNot100Change: EventEmitter<void> = new EventEmitter<void>();

  selectLanguage(language: string): void {
    this.languageSelection.emit(language);
  }

  changeRepeatsMode(): void {
    this.repeatsModeChange.emit();
  }

  scoreNot100ChangeMode(): void {
    this.scoreNot100Change.emit();
  }
}
