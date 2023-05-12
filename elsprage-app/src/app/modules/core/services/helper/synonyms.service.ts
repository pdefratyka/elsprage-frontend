import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SynonymsService {

  private static DELIMITER: string = ";";

  constructor() { }

  public static removeSpaces(text: string): string {
    return text.replace("; ", SynonymsService.DELIMITER);
  }

  public static addSpaces(text: string): string {
    return text.replace(SynonymsService.DELIMITER, ", ");
  }
}
