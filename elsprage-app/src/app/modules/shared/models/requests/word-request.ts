export interface WordRequest {
    id: number;
    userId: number;
    value: string;
    translation: string;
    valueLanguageId: number;
    translationLanguageId: number;
    image: string;
    sound: string;
    example: string;
}