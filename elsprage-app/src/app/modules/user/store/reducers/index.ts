import {
    ActionReducerMap,
    createFeatureSelector,
} from '@ngrx/store';
import * as fromUserReducer from './user.reducer';

export interface UserState {
    user: fromUserReducer.UserState;
}

export const userReducer: ActionReducerMap<UserState> = {
    user: fromUserReducer.userReducer,
};

export const getUserState = createFeatureSelector<UserState>('user');