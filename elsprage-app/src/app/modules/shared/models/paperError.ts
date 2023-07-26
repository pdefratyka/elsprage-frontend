export interface PaperError {
    id: number;
    resultId: number;
    wrong: string;
    corrected: string;
    explanation: string;
    errorLevel: string;
}