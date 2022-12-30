import { createReducer, on } from '@ngrx/store';
import { Language } from 'src/app/modules/shared/models/language';
import { WordApiAction } from '../actions';

export interface WordState {
    error: string,
    languages: Language[]
}

export const initialState: WordState = {
    error: '',
    languages: []
};

export const wordReducer = createReducer<WordState>(
    initialState,
    on(WordApiAction.saveWordSuccess, (state, action): WordState => {
        return {
            ...state,
            error: ''
        };
    }),
    on(WordApiAction.saveWordFailure, (state, action): WordState => {
        return {
            ...state,
            error: action.error.message
        };
    }),
    on(WordApiAction.getLanguagesSuccess, (state, action): WordState => {
        return {
            ...state,
            languages: action.languages,
            error: '',
        };
    }),
    on(WordApiAction.getLanguagesFailure, (state, action): WordState => {
        return {
            ...state,
            error: action.error.message
        };
    }),
);
