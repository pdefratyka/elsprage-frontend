import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, switchMap } from 'rxjs';
import { ToastService } from 'src/app/modules/core/services/notification/toast.service';
import { LearningApiAction, LearningPageAction } from '../actions';
import { LearningApiService } from 'src/app/modules/core/services/api/learning-api.service';

@Injectable()
export class LearningEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly learningApiService: LearningApiService,
    private readonly toastService: ToastService
  ) { }

  getLearningPackets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LearningPageAction.getLearningPackets),
      switchMap(() =>
        this.learningApiService.getLearningPackets().pipe(
          map(learningPackets =>
            LearningApiAction.getLearningPacketsSuccess({ learningPackets })
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              LearningApiAction.getLearningPacketsFailure({ error })
            );
          })
        )
      )
    )
  );

  getPacketsWords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LearningPageAction.getPacketsWords),
      switchMap((action) =>
        this.learningApiService.getPacketsWords(action.packetId, action.learningMode).pipe(
          map(learningWords =>
            LearningApiAction.getPacketsWordsSuccess({ learningWords })
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              LearningApiAction.getPacketsWordsFailure({ error })
            );
          })
        )
      )
    )
  );

  saveLearningResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LearningPageAction.saveLearningResult),
      switchMap((action) =>
        this.learningApiService.saveLearningResult(action.learningResult).pipe(
          map(() =>
            LearningApiAction.saveLearningResultSuccess()
          ),
          catchError(error => {
            this.toastService.error(error);
            return of(
              LearningApiAction.saveLearningResultFailure({ error })
            );
          })
        )
      )
    )
  );
}
