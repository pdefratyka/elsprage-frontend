import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { UserApiService } from 'src/app/modules/core/services/api/user-api.service';
import { UserHelperService } from 'src/app/modules/core/services/helper/user-helper.service';
import { UserApiAction, UserPageAction } from '../actions';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly userApiService: UserApiService,
    private readonly userHelperService: UserHelperService
  ) {}

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserPageAction.createUser),
      concatMap((action) =>
        this.userApiService.createUser(action.createUserRequest).pipe(
          map((createUserResponse) => {
            this.userHelperService.handleRegisterSuccess();
            return UserApiAction.createUserSuccess({
              createUserResponse,
            });
          }),
          catchError((error) => {
            this.userHelperService.handleRegisterFailure(error);
            return of(UserApiAction.createUserFailure({ error }));
          })
        )
      )
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserPageAction.loginUser),
      concatMap((action) =>
        this.userApiService.login(action.loginUserRequest).pipe(
          map((loginResponse) => {
            this.userHelperService.handleLoginSuccess(loginResponse);
            return UserApiAction.loginUserSuccess({
              loginResponse,
            });
          }),
          catchError((error) => {
            this.userHelperService.handleLoginFailure(error);
            return of(UserApiAction.loginUserFailure({ error }));
          })
        )
      )
    );
  });
}
