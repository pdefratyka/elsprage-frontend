import { PaperMode } from "../../shared/models/paperMode";
import { Topic } from "../../shared/models/topic";

export interface PaperStartGameParameteres {
    mode: PaperMode;
    topic: Topic;
    language: string;
}