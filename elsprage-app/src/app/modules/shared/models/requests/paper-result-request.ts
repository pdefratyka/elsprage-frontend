import { PaperError } from "../paperError";

export interface PaperResultRequest {
    paperText: string;
    refactoredText: string;
    topicId: number;
    language: string;
    paperModeId: number;
    paperErrors: PaperError[];
}