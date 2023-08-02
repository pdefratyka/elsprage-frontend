import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PacketsFilter } from 'src/app/modules/shared/models/packetsFilter';

@Component({
  selector: 'app-learning-packets-filters',
  templateUrl: './learning-packets-filters.component.html',
  styleUrls: ['./learning-packets-filters.component.scss']
})
export class LearningPacketsFiltersComponent {
  @Input()
  packetsFilter: PacketsFilter;
  @Output()
  languageSelection: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  repeatsModeChange: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  scoreNot100Change: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('languageSelector') languageSelector: ElementRef<HTMLInputElement>;;

  selectLanguage(): void {
    const language = this.languageSelector.nativeElement.value;
    this.languageSelection.emit(language);
  }

  selectRepeats(): void {
    console.log("Select repeats");
    this.repeatsModeChange.emit();
  }

  selectScoreNot100(): void {
    console.log("Select not 100");
    this.scoreNot100Change.emit();
  }
}
