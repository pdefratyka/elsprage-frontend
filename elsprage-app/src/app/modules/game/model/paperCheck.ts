import { PaperError } from "../../shared/models/paperError";

export interface PaperCheck {
    refactoredText: string;
    paperErrors: PaperError[];
}