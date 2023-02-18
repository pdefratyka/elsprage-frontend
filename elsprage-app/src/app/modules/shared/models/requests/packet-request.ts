export interface PacketRequest {
  name: string;
  wordsIds: number[];
  valueLanguageId: number;
  translationLanguageId: number;
  description?: string;
}
