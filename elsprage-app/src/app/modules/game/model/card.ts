export interface Card {
    identifier: number,
    isVisible: boolean,
    isAnswerVisible: boolean,
    text: string,
    wordId: number,
    isTranslation: boolean,
    audio: string
}