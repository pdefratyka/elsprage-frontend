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
            console.log(word);
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

  updateWord$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WordPageAction.updateWord),
      concatMap((action) =>
        this.wordApiService.updateWord(action.word).pipe(
          map((word) => {
            this.toastService.success('Word has been updated');
            console.log(word);
            return WordApiAction.updateWordSuccess({
              word,
            });
          }),
          catchError((error) => {
            this.toastService.error(error);
            return of(WordApiAction.updateWordFailure({ error }));
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
        this.wordApiService.getUsersWords().pipe(
          map((usersWordsResponse) => {
            return WordApiAction.getWordsSuccess({
              usersWordsResponse,
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

  removeWord$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WordPageAction.removeWord),
      concatMap((action) =>
        this.wordApiService.removeWord(action.wordId).pipe(
          map(() => {
            return WordApiAction.removeWordSuccess({
              wordId: action.wordId,
            });
          }),
          catchError((error) => {
            this.toastService.error(error);
            return of(WordApiAction.removeWordFailure({ error }));
          })
        )
      )
    );
  });

  getWordById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WordPageAction.getWordById),
      concatMap((action) =>
        this.wordApiService.getWordById(action.wordId).pipe(
          map((word) => {
            return WordApiAction.getWordByIdSuccess({
              word,
            });
          }),
          catchError((error) => {
            this.toastService.error(error);
            return of(WordApiAction.getWordByIdFailure({ error }));
          })
        )
      )
    );
  });
}
