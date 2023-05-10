import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LearningMode } from 'src/app/modules/shared/models/learningMode';
import { LearningPacket } from 'src/app/modules/shared/models/learningPacket';
import { LearningResult } from 'src/app/modules/shared/models/learningResult';
import { LearningWord } from 'src/app/modules/shared/models/learningWord';
import { LearningPacketsResponse } from 'src/app/modules/shared/models/responses/learning-packets-response';
import { PacketsWordsResponse } from 'src/app/modules/shared/models/responses/packets-words-response';

@Injectable({
  providedIn: 'root'
})
export class LearningApiService {
  private static LEARNING_URL = '/learning';
  constructor(private readonly httpClient: HttpClient) { }


  getLearningPackets(): Observable<LearningPacket[]> {
    return this.httpClient.get<LearningPacketsResponse>(
      `${LearningApiService.LEARNING_URL}/packets`
    ).pipe(map(response => response.learningPackets));
  }

  getPacketsWords(packetId: number, learningMode: LearningMode): Observable<LearningWord[]> {
    let learningModeString = "";
    if (learningMode === LearningMode.TRANSLATION_TO_VALUE) {
      learningModeString = "TRANSLATION_TO_VALUE";
    } else {
      learningModeString = "VALUE_TO_TRANSLATION";
    }
    return this.httpClient.get<PacketsWordsResponse>(
      `${LearningApiService.LEARNING_URL}/${packetId}/words?learningMode=${learningModeString}`
    ).pipe(map(response => response.learningWords));
  }

  saveLearningResult(learningResult: LearningResult): Observable<LearningResult> {
    return this.httpClient.post<any>(
      `${LearningApiService.LEARNING_URL}/result`, learningResult
    );
  }
}
