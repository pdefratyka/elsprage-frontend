import { LearningMode } from "./learningMode";

export interface LearningResult {
    packetId: number;
    score: number;
    mode: LearningMode;
    repetitions: Map<number, number>;
}