import { createAction, props } from '@ngrx/store';
import { CreateUserRequest } from 'src/app/modules/shared/models/requests/create-user-request';
import { CreateUserResponse } from 'src/app/modules/shared/models/responses/create-user-response';
import { LoginResponse } from 'src/app/modules/shared/models/responses/login-response';

const USER_API = 'User API';

export const createUserSuccess = createAction(
    `[${USER_API}] Create User Success`,
    props<{ createUserResponse: CreateUserResponse }>()
);

export const createUserFailure = createAction(
    `[${USER_API}] Create User Failure`,
    props<{ error: Error }>()
);

export const loginUserSuccess = createAction(
    `[${USER_API}] Login User Success`,
    props<{ loginResponse: LoginResponse }>()
);

export const loginUserFailure = createAction(
    `[${USER_API}] Login User Failure`,
    props<{ error: Error }>()
);