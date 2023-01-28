import { createAction, props } from '@ngrx/store';
import { Language } from 'src/app/modules/shared/models/language';
import { LanguagesResponse } from 'src/app/modules/shared/models/responses/languages-response';
import { Word } from 'src/app/modules/shared/models/word';

const WORD_API = 'Word API';

export const saveWordSuccess = createAction(
  `[${WORD_API}] Save Word Success`,
  props<{ word: Word }>()
);

export const saveWordFailure = createAction(
  `[${WORD_API}] Save Word Failure`,
  props<{ error: Error }>()
);

export const getLanguagesSuccess = createAction(
  `[${WORD_API}] Get Languages Success`,
  props<{ languagesResponse: LanguagesResponse }>()
);

export const getLanguagesFailure = createAction(
  `[${WORD_API}] Get Languages Failure`,
  props<{ error: Error }>()
);

export const getWordsSuccess = createAction(
  `[${WORD_API}] Get Words Success`,
  props<{ words: Word[] }>()
);

export const getWordsFailure = createAction(
  `[${WORD_API}] Get Words Failure`,
  props<{ error: Error }>()
);
