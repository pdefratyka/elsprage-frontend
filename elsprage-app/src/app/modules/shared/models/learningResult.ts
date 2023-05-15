import { LearningMode } from "./learningMode";
import { WordRepetition } from "./wordRepetition";

export interface LearningResult {
    packetId: number;
    score: number;
    learningMode: LearningMode;
    repetition: boolean;
    repetitions: WordRepetition[];
}