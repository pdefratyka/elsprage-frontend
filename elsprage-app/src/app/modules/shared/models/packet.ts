import { Language } from './language';

export interface Packet {
  name: string;
  description: string;
  valueLanguage: Language;
  translationLanguage: Language;
  wordsIds: number[];
}
