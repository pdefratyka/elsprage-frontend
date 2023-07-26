import { PaperError } from "./paperError";
import { PaperMode } from "./paperMode";
import { Topic } from "./topic";

export interface PaperResult {
    id: number;
    paperText: string;
    refactoredText: string;
    topicId: number;
    topic: Topic;
    language: string;
    userId: number;
    date: Date;
    numberOfWords: number;
    numberOfCharacters: number;
    paperMode: PaperMode;
    paperErrors: PaperError[];
}