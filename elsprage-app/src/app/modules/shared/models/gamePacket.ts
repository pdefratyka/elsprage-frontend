export interface GamePacket {
    packetId: number;
    packetName: string;
    valueLanguage: string;
    translationLanguage: string;
    wordsCount: number;
    lastLearned: Date;
    lastScore: number;
    bestScore: number;
}