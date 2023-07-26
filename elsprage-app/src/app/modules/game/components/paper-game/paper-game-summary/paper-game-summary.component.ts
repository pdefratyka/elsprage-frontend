import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaperStartGameParameteres } from '../../../model/paperStartGameParameters';
import { PaperResult } from 'src/app/modules/shared/models/paperResult';

@Component({
  selector: 'app-paper-game-summary',
  templateUrl: './paper-game-summary.component.html',
  styleUrls: ['./paper-game-summary.component.scss']
})
export class PaperGameSummaryComponent {
  @Input()
  paperResult: PaperResult;
}
