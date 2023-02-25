import { Word } from '../word';

export interface UsersWordsResponse {
  words: Word[];
  numberOfWords: number;
  page: number;
  pageSize: number;
}
