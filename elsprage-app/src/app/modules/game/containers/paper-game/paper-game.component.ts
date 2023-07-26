import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameState, getPaperModes, getSavedPaperResult, getTopics } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/modules/shared/models/topic';
import { GamePageAction } from '../../store/actions';
import { PaperStartGameParameteres } from '../../model/paperStartGameParameters';
import { PaperResultRequest } from 'src/app/modules/shared/models/requests/paper-result-request';
import { PaperResult } from 'src/app/modules/shared/models/paperResult';
import { PaperMode } from 'src/app/modules/shared/models/paperMode';
import { PaperError } from 'src/app/modules/shared/models/paperError';
import { PaperCheck } from '../../model/paperCheck';

@Component({
  selector: 'app-paper-game',
  templateUrl: './paper-game.component.html',
  styleUrls: ['./paper-game.component.scss']
})
export class PaperGameComponent implements OnInit {

  topics$: Observable<Topic[]>
  paperModes$: Observable<PaperMode[]>
  savedPaperResult$: Observable<PaperResult>;
  gameParameters: PaperStartGameParameteres;
  paperErrors: PaperError[];
  paperText: string;
  isSelectTopic = true;
  isGameCompetition = false;
  isPaperCheck = false;
  isSummary = false;

  constructor(private readonly router: Router, private gameStore: Store<GameState>) {
    this.topics$ = this.gameStore.select(getTopics);
    this.savedPaperResult$ = this.gameStore.select(getSavedPaperResult);
    this.paperModes$ = this.gameStore.select(getPaperModes);
  }

  ngOnInit(): void {
    this.gameStore.dispatch(GamePageAction.getTopics());
    this.gameStore.dispatch(GamePageAction.getPaperModes());
  }

  cancelLearning(): void {
    if (confirm("Are you sure you want to quit paper game mode?")) {
      this.router.navigate(['/games']);
    }
  }

  startGame(startGameParameters: PaperStartGameParameteres): void {
    this.gameParameters = startGameParameters;
    this.isSelectTopic = false;
    this.isGameCompetition = true;
  }

  checkPaper(paperText: string): void {
    this.paperText = paperText;
    this.isGameCompetition = false;
    this.isPaperCheck = true;
  }

  showSummary(paperCheck: PaperCheck): void {
    this.saveResult(paperCheck);
    this.isPaperCheck = false;
    this.isSummary = true;
  }

  private saveResult(paperCheck: PaperCheck): void {
    const paperResultRequest = {
      paperText: this.paperText,
      refactoredText: paperCheck.refactoredText,
      topicId: this.gameParameters.topic.id,
      language: this.gameParameters.language,
      paperModeId: this.gameParameters.mode.id,
      paperErrors: paperCheck.paperErrors
    } as PaperResultRequest;
    console.log("Save peper result: ", paperResultRequest);
    this.gameStore.dispatch(GamePageAction.savePaperResult({ paperResultRequest }));
  }
}
