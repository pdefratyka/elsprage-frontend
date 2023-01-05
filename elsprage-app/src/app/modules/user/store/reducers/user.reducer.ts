import { createReducer, on } from '@ngrx/store';
import { UserApiAction } from '../actions';

export interface UserState {
    error: string,
}

export const initialState: UserState = {
    error: '',
};

export const userReducer = createReducer<UserState>(
    initialState,
    on(UserApiAction.createUserFailure, (state, action): UserState => {
        return {
            ...state,
            error: action.error.message
        };
    }),
    on(UserApiAction.loginUserFailure, (state, action): UserState => {
        return {
            ...state,
            error: action.error.message
        };
    }),
);
