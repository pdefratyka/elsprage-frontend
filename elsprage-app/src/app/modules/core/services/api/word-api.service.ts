import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/modules/shared/models/language';
import { WordRequest } from 'src/app/modules/shared/models/requests/word-request';
import { Word } from 'src/app/modules/shared/models/word';

@Injectable({
  providedIn: 'root'
})
export class WordApiService {
  private static WORDS_URL = '/words';
  constructor(private readonly httpClient: HttpClient) { }

  saveWord(word: Word): Observable<Word> {
    return this.httpClient
      .post<Word>(WordApiService.WORDS_URL, this.mapToLanguageRequest(word));
  }

  getLanguages(): Observable<Language[]> {
    return this.httpClient
      .get<Language[]>(`${WordApiService.WORDS_URL}/languages`);
  }

  private mapToLanguageRequest(word: Word): WordRequest {
    return {
      id: word.id,
      value: word.value,
      translation: word.translation,
      userId: 1,
      valueLanguageId: word.valueLanguage.id,
      translationLanguageId: word.translationLanguage.id,
      example: word.example,
      image: word.image,
      sound: word.sound
    } as WordRequest
  }
}
