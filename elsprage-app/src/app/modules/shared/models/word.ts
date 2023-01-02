import { Language } from "./language";

export interface Word {
    id: number;
    userId: number;
    value: string;
    translation: string;
    valueLanguage: Language;
    translationLanguage: Language;
    image: string;
    sound: string;
    example: string;
    imageDataEncoded: string;
}