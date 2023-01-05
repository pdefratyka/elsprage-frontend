import { createAction, props } from '@ngrx/store';
import { CreateUserRequest } from 'src/app/modules/shared/models/requests/create-user-request';
import { LoginUserRequest } from 'src/app/modules/shared/models/requests/login-user-request';

const USER_PAGE = 'User Page';

export const createUser = createAction(
    `[${USER_PAGE}] Create user`, props<{ createUserRequest: CreateUserRequest }>()
);

export const loginUser = createAction(
    `[${USER_PAGE}] Get Languages`, props<{ loginUserRequest: LoginUserRequest }>()
);
