import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Packet } from 'src/app/modules/shared/models/packet';
import { PacketRequest } from 'src/app/modules/shared/models/requests/packet-request';
import { PacketResponse } from 'src/app/modules/shared/models/responses/packet-response';
import { UsersPacketsResponse } from 'src/app/modules/shared/models/responses/users-packets-response';

@Injectable({
  providedIn: 'root',
})
export class PacketApiService {
  private static PACKETS_URL = '/packets';
  constructor(private readonly httpClient: HttpClient) {}

  savePacket(packetRequest: PacketRequest): Observable<Packet> {
    return this.httpClient
      .post<PacketResponse>(PacketApiService.PACKETS_URL, packetRequest)
      .pipe(map((response) => response.packet));
  }

  getUsersPackets(): Observable<UsersPacketsResponse> {
    return this.httpClient.get<UsersPacketsResponse>(
      PacketApiService.PACKETS_URL
    );
  }

  getPacketById(packetId: number): Observable<Packet> {
    return this.httpClient.get<Packet>(
      `${PacketApiService.PACKETS_URL}/${packetId}`
    );
  }

  removePacket(packetId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${PacketApiService.PACKETS_URL}/${packetId}`
    );
  }
}
