import { Tag } from "./tag";

export interface Topic {
    id: number;
    value: string;
    tags: Tag[];
}