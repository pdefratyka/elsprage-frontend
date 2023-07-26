import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PaperMode } from 'src/app/modules/shared/models/paperMode';
import { PaperResult } from 'src/app/modules/shared/models/paperResult';
import { CreateTagRequest } from 'src/app/modules/shared/models/requests/create-tag-request';
import { CreateTopicRequest } from 'src/app/modules/shared/models/requests/create-topic-request';
import { PaperResultRequest } from 'src/app/modules/shared/models/requests/paper-result-request';
import { PaperModesResponse } from 'src/app/modules/shared/models/responses/paper-modes-response';
import { PaperResultsResponse } from 'src/app/modules/shared/models/responses/paper-result-response';
import { TagsResponse } from 'src/app/modules/shared/models/responses/tags-response';
import { TopicsResponse } from 'src/app/modules/shared/models/responses/topics-response';
import { Tag } from 'src/app/modules/shared/models/tag';
import { Topic } from 'src/app/modules/shared/models/topic';

@Injectable({
  providedIn: 'root'
})
export class PaperApiService {
  private static PAPER_URL = '/paper';
  constructor(private readonly httpClient: HttpClient) { }


  saveTag(tag: string): Observable<Tag> {
    console.log(tag);
    const request = {
      value: tag
    } as CreateTagRequest
    return this.httpClient.post<any>(
      `${PaperApiService.PAPER_URL}/tags`, request
    );
  }

  saveTopic(topicRequest: CreateTopicRequest): Observable<Topic> {
    console.log(topicRequest);
    return this.httpClient.post<any>(
      `${PaperApiService.PAPER_URL}/topics`, topicRequest
    );
  }

  savePaperResult(paperResultRequest: PaperResultRequest): Observable<PaperResult> {
    console.log(paperResultRequest);
    return this.httpClient.post<any>(
      `${PaperApiService.PAPER_URL}/results`, paperResultRequest
    );
  }

  getTags(): Observable<Tag[]> {
    return this.httpClient.get<TagsResponse>(
      `${PaperApiService.PAPER_URL}/tags`
    ).pipe(map(response => response.tags));
  }

  getTopics(): Observable<Topic[]> {
    return this.httpClient.get<TopicsResponse>(
      `${PaperApiService.PAPER_URL}/topics`
    ).pipe(map(response => response.topics));
  }

  getPaperResults(): Observable<PaperResult[]> {
    return this.httpClient.get<PaperResultsResponse>(
      `${PaperApiService.PAPER_URL}/results`
    ).pipe(map(response => response.paperResults));
  }

  getPaperModes(): Observable<PaperMode[]> {
    return this.httpClient.get<PaperModesResponse>(
      `${PaperApiService.PAPER_URL}/modes`
    ).pipe(map(response => response.paperModes));
  }

  deleteTopic(topicId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${PaperApiService.PAPER_URL}/topics/${topicId}`
    );
  }

  deleteTag(tagId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${PaperApiService.PAPER_URL}/tags/${tagId}`
    );
  }

  getPaperResultById(paperResultId: number): Observable<PaperResult> {
    return this.httpClient.get<PaperResult>(
      `${PaperApiService.PAPER_URL}/results/${paperResultId}`);
  }
}
