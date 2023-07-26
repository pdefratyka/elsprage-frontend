import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ToastService } from 'src/app/modules/core/services/notification/toast.service';
import { GameApiAction, GamePageAction } from '../actions';
import { GameApiService } from 'src/app/modules/core/services/api/game-api.service';
import { PaperApiService } from 'src/app/modules/core/services/api/paper-api.service';

@Injectable()
export class GameEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly gameApiService: GameApiService,
    private readonly paperApiService: PaperApiService,
    private readonly toastService: ToastService
  ) { }

  getGamePackets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.getGamePackets),
      switchMap((action) =>
        this.gameApiService.getGamePackets(action.gameType).pipe(
          map(gamePackets =>
            GameApiAction.getGamePacketsSuccess({ gamePackets })
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.getGamePacketsFailure({ error })
            );
          })
        )
      )
    )
  );

  saveGameResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.saveGameResult),
      switchMap((action) =>
        this.gameApiService.saveGameResult(action.gameResult).pipe(
          map(gamePackets => {
            this.toastService.success('Game result has been saved');
            return GameApiAction.saveGameResultSuccess()
          }
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.saveGameResultFailure({ error })
            );
          })
        )
      )
    )
  );

  saveTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.saveTag),
      switchMap((action) =>
        this.paperApiService.saveTag(action.tag).pipe(
          map((tag) => {
            this.toastService.success('Tag has been saved');
            return GameApiAction.saveTagSuccess({ tag })
          }
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.saveTagFailure({ error })
            );
          })
        )
      )
    )
  );

  getTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.getTags),
      switchMap(() =>
        this.paperApiService.getTags().pipe(
          map(tags =>
            GameApiAction.getTagsSuccess({ tags })
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.getTagsFailure({ error })
            );
          })
        )
      )
    )
  );

  saveTopic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.saveTopic),
      switchMap((action) =>
        this.paperApiService.saveTopic(action.topicRequest).pipe(
          map((topic) => {
            this.toastService.success('Topic has been saved');
            return GameApiAction.saveTopicSuccess({ topic })
          }
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.saveTopicFailure({ error })
            );
          })
        )
      )
    )
  );

  getTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.getTopics),
      switchMap(() =>
        this.paperApiService.getTopics().pipe(
          map(topics =>
            GameApiAction.getTopicsSuccess({ topics })
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.getTopicsFailure({ error })
            );
          })
        )
      )
    )
  );

  savePaperResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.savePaperResult),
      switchMap((action) =>
        this.paperApiService.savePaperResult(action.paperResultRequest).pipe(
          map((paperResult) => {
            this.toastService.success('Result has been saved');
            return GameApiAction.savePaperResultSuccess({ paperResult })
          }
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.savePaperResultFailure({ error })
            );
          })
        )
      )
    )
  );

  getPaperResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.getPaperResults),
      switchMap(() =>
        this.paperApiService.getPaperResults().pipe(
          map(paperResults =>
            GameApiAction.getPaperResultsSuccess({ paperResults })
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.getPaperResultsFailure({ error })
            );
          })
        )
      )
    )
  );

  getPaperModes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.getPaperModes),
      switchMap(() =>
        this.paperApiService.getPaperModes().pipe(
          map(paperModes =>
            GameApiAction.getPaperModesSuccess({ paperModes })
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.getPaperModesFailure({ error })
            );
          })
        )
      )
    )
  );

  deleteTopic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.deleteTopic),
      switchMap((action) =>
        this.paperApiService.deleteTopic(action.topicId).pipe(
          map(() =>
            GameApiAction.deleteTopicSuccess({ topicId: action.topicId })
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.deleteTopicFailure({ error })
            );
          })
        )
      )
    )
  );

  deleteTag$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.deleteTag),
      switchMap((action) =>
        this.paperApiService.deleteTag(action.tagId).pipe(
          map(() =>
            GameApiAction.deleteTagSuccess({ tagId: action.tagId })
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.deleteTagFailure({ error })
            );
          })
        )
      )
    )
  );

  getSinglePaperResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePageAction.getSinglePaperResult),
      switchMap((action) =>
        this.paperApiService.getPaperResultById(action.paperResultId).pipe(
          map(paperResult =>
            GameApiAction.getSinglePaperResultSuccess({ paperResult })
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              GameApiAction.getSinglePaperResultFailure({ error })
            );
          })
        )
      )
    )
  );

}
