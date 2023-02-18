import { createAction, props } from '@ngrx/store';
import { Word } from 'src/app/modules/shared/models/word';

const WORD_PAGE = 'Word Page';

export const saveWord = createAction(
  `[${WORD_PAGE}] Save word`,
  props<{ word: Word }>()
);

export const getLanguages = createAction(`[${WORD_PAGE}] Get Languages`);

export const getWords = createAction(`[${WORD_PAGE}] Get Words`);

export const removeWord = createAction(
  `[${WORD_PAGE}] Remove Word`,
  props<{ wordId: number }>()
);

export const getWordById = createAction(
  `[${WORD_PAGE}] Get Word`,
  props<{ wordId: number }>()
);

export const updateWord = createAction(
  `[${WORD_PAGE}] Update Word`,
  props<{ word: Word }>()
);
