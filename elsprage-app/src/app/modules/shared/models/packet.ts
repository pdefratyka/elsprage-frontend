import { Language } from './language';
import { Word } from './word';

export interface Packet {
  name: string;
  id: number;
  description: string;
  valueLanguage: Language;
  translationLanguage: Language;
  wordsIds: number[];
  words: Word[];
}
