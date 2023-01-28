import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { WordApiService } from 'src/app/modules/core/services/api/word-api.service';
import { ToastService } from 'src/app/modules/core/services/notification/toast.service';
import { WordApiAction, WordPageAction } from '../actions';

@Injectable()
export class WordEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly wordApiService: WordApiService,
    private readonly toastService: ToastService
  ) {}

  saveWord$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WordPageAction.saveWord),
      concatMap((action) =>
        this.wordApiService.saveWord(action.word).pipe(
          map((word) => {
            this.toastService.success('Word has been saved');
            console.log('Word: ' + word);
            return WordApiAction.saveWordSuccess({
              word,
            });
          }),
          catchError((error) => {
            this.toastService.error(error);
            return of(WordApiAction.saveWordFailure({ error }));
          })
        )
      )
    );
  });

  getLanguages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WordPageAction.getLanguages),
      concatMap(() =>
        this.wordApiService.getLanguages().pipe(
          map((languagesResponse) => {
            return WordApiAction.getLanguagesSuccess({
              languagesResponse,
            });
          }),
          catchError((error) => {
            this.toastService.error(error);
            return of(WordApiAction.getLanguagesFailure({ error }));
          })
        )
      )
    );
  });

  getWords$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WordPageAction.getWords),
      concatMap(() =>
        this.wordApiService.getWords().pipe(
          map((words) => {
            return WordApiAction.getWordsSuccess({
              words,
            });
          }),
          catchError((error) => {
            this.toastService.error(error);
            return of(WordApiAction.getWordsFailure({ error }));
          })
        )
      )
    );
  });
}
