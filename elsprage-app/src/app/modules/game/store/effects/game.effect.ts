import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ToastService } from 'src/app/modules/core/services/notification/toast.service';
import { GameApiAction, GamePageAction } from '../actions';
import { GameApiService } from 'src/app/modules/core/services/api/game-api.service';

@Injectable()
export class GameEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly gameApiService: GameApiService,
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
}
