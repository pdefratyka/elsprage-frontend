import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { PacketApiService } from 'src/app/modules/core/services/api/packet-api.service';
import { ToastService } from 'src/app/modules/core/services/notification/toast.service';
import { PacketApiAction, PacketPageAction } from '../actions';

@Injectable()
export class PacketsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly packetApiService: PacketApiService,
    private readonly toastService: ToastService
  ) {}

  savePacket$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PacketPageAction.savePacket),
      concatMap((action) =>
        this.packetApiService.savePacket(action.packetRequest).pipe(
          map((packet) => {
            this.toastService.success('Packet has been saved');
            return PacketApiAction.savePacketSuccess({
              packet,
            });
          }),
          catchError((error) => {
            this.toastService.error(error);
            return of(PacketApiAction.savePacketFailure({ error }));
          })
        )
      )
    );
  });

  getUsersPackets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PacketPageAction.getUsersPackets),
      concatMap(() =>
        this.packetApiService.getUsersPackets().pipe(
          map((usersPacketsResponse) => {
            return PacketApiAction.getUsersPacketsSuccess({
              usersPacketsResponse,
            });
          }),
          catchError((error) => {
            this.toastService.error(error);
            return of(PacketApiAction.getUsersPacketsFailure({ error }));
          })
        )
      )
    );
  });
}
