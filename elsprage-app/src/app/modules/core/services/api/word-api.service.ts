import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/modules/shared/models/language';
import { WordRequest } from 'src/app/modules/shared/models/requests/word-request';
import { LanguagesResponse } from 'src/app/modules/shared/models/responses/languages-response';
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

  getLanguages(): Observable<LanguagesResponse> {
    return this.httpClient
      .get<LanguagesResponse>('/languages');
  }

  getWords(): Observable<Word[]> {
    return this.httpClient
      .get<Word[]>(WordApiService.WORDS_URL);
  }

  private mapToLanguageRequest(word: Word): WordRequest {
    return {
      id: word.id,
      value: word.value,
      translation: word.translation,
      valueLanguageId: word.valueLanguage.id,
      translationLanguageId: word.translationLanguage.id,
      valueLanguage: word.valueLanguage,
      translationLanguage: word.translationLanguage,
      example: word.example,
      image: word.image,
      sound: word.sound
    } as WordRequest
  }
}
