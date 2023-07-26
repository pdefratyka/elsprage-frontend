import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PaperStartGameParameteres } from '../../../model/paperStartGameParameters';
import { PaperError } from 'src/app/modules/shared/models/paperError';
import { PaperCheck } from '../../../model/paperCheck';

@Component({
  selector: 'app-paper-game-difference',
  templateUrl: './paper-game-difference.component.html',
  styleUrls: ['./paper-game-difference.component.scss']
})
export class PaperGameDifferenceComponent implements OnInit {
  @Input()
  gameParameters: PaperStartGameParameteres;
  @Input()
  paperText: string;
  @Output()
  summaryShow: EventEmitter<PaperCheck> = new EventEmitter<PaperCheck>();
  @ViewChild('refactoredText') refactoredText: ElementRef<HTMLInputElement>;
  @ViewChild('improvedText') improvedText: ElementRef<HTMLInputElement>;

  paperErrors: PaperError[] = [];

  ngOnInit(): void {
  }

  showSummary(): void {
    const paperCheck = {
      refactoredText: this.refactoredText.nativeElement.value,
      paperErrors: this.paperErrors
    } as PaperCheck
    this.summaryShow.emit(paperCheck);
  }
}
