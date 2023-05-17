export interface LearningPacket {
    packetId: number;
    packetName: string;
    valueLanguage: string;
    translationLanguage: string;
    wordsCount: number;
    lastLearned: Date;
    lastScore: number;
    bestScore: number;
    numberOfRepetitionsOfValueToTranslation: number;
    numberOfRepetitionsOfTranslationToValue: number;
}