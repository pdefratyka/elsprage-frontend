import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Language } from 'src/app/modules/shared/models/language';
import { WordRequest } from 'src/app/modules/shared/models/requests/word-request';
import { LanguagesResponse } from 'src/app/modules/shared/models/responses/languages-response';
import { UsersWordsResponse } from 'src/app/modules/shared/models/responses/users-words-response';
import { WordResponse } from 'src/app/modules/shared/models/responses/word-response';
import { Word } from 'src/app/modules/shared/models/word';

@Injectable({
  providedIn: 'root',
})
export class WordApiService {
  private static WORDS_URL = '/words';
  constructor(private readonly httpClient: HttpClient) { }

  saveWord(word: Word): Observable<Word> {
    return this.httpClient
      .post<WordResponse>(
        WordApiService.WORDS_URL,
        this.mapToLanguageRequest(word)
      )
      .pipe(map((response) => response.word));
  }

  updateWord(word: Word): Observable<Word> {
    return this.httpClient
      .put<WordResponse>(
        WordApiService.WORDS_URL,
        this.mapToLanguageRequest(word)
      )
      .pipe(map((response) => response.word));
  }

  getLanguages(): Observable<LanguagesResponse> {
    return this.httpClient.get<LanguagesResponse>('/languages');
  }

  getUsersWords(query: string, page: number): Observable<UsersWordsResponse> {
    return this.httpClient.get<UsersWordsResponse>(
      `${WordApiService.WORDS_URL}/user?query=${query}&page=${page}`
    );
  }

  removeWord(wordId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${WordApiService.WORDS_URL}/${wordId}`
    );
  }

  getWordById(wordId: number): Observable<Word> {
    return this.httpClient
      .get<WordResponse>(`${WordApiService.WORDS_URL}/${wordId}`)
      .pipe(map((response) => response.word));
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
      sound: word.sound,
      explanation: word.explanation
    } as WordRequest;
  }
}
