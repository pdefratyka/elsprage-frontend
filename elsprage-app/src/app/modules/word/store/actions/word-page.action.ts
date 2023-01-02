import { createAction, props } from '@ngrx/store';
import { Word } from 'src/app/modules/shared/models/word';

const WORD_PAGE = 'Word Page';

export const saveWord = createAction(
    `[${WORD_PAGE}] Get Time Series`, props<{ word: Word }>()
);

export const getLanguages = createAction(
    `[${WORD_PAGE}] Get Languages`
);

export const getWords = createAction(
    `[${WORD_PAGE}] Get Words`
);