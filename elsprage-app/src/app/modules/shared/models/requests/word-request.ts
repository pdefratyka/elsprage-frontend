import { Language } from "../language";

export interface WordRequest {
    id: number;
    userId: number;
    value: string;
    translation: string;
    valueLanguageId: number;
    translationLanguageId: number;
    valueLanguage: Language;
    translationLanguage: Language;
    image: string;
    sound: string;
    example: string;
}