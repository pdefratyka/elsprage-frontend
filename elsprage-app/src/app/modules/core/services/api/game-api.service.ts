import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GamePacket } from 'src/app/modules/shared/models/gamePacket';
import { GameResult } from 'src/app/modules/shared/models/gameResult';
import { GamePacketsResponse } from 'src/app/modules/shared/models/responses/game-packets-response';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {
  private static GAME_URL = '/games';
  constructor(private readonly httpClient: HttpClient) { }


  getGamePackets(gameType: string): Observable<GamePacket[]> {
    return this.httpClient.get<GamePacketsResponse>(
      `${GameApiService.GAME_URL}/${gameType}/packets`
    ).pipe(map(response => response.gamePackets));
  }

  saveGameResult(gameResult: GameResult) {
    console.log(gameResult);
    return this.httpClient.post<any>(
      `${GameApiService.GAME_URL}/result`, gameResult
    );
  }
}