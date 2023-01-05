import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { UserApiService } from 'src/app/modules/core/services/api/user-api.service';
import { WordApiService } from 'src/app/modules/core/services/api/word-api.service';
import { ToastService } from 'src/app/modules/core/services/notification/toast.service';
import { TokenService } from 'src/app/modules/core/services/security/token.service';
import { UserApiAction, UserPageAction } from '../actions';


@Injectable()
export class UserEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly userApiService: UserApiService,
        private readonly toastService: ToastService,
        private readonly tokenService: TokenService
    ) { }

    createUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserPageAction.createUser),
            concatMap((action) =>
                this.userApiService.createUser(action.createUserRequest).pipe(
                    map((createUserResponse) => {
                        this.toastService.success(`User: ${createUserResponse.login} has been created`);
                        return UserApiAction.createUserSuccess({
                            createUserResponse
                        });
                    }),
                    catchError((error) => {
                        this.toastService.error(error);
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
                        console.log("Hej");
                        this.tokenService.setToken(loginResponse.token);
                        this.toastService.success("You have successfully loged in");
                        this.tokenService.getUserId();
                        // save token to localStore
                        return UserApiAction.loginUserSuccess({
                            loginResponse
                        });
                    }),
                    catchError((error) => {
                        this.toastService.error(error);
                        return of(UserApiAction.loginUserFailure({ error }));
                    })
                )
            )
        );
    });
}
