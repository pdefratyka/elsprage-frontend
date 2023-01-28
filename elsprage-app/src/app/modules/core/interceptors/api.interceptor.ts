import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../services/common/token.service';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private readonly tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.toString().includes('assets/i18n')) {
      return next.handle(request);
    }
    const apiReq = request.clone({
      url: `${environment.url}${request.url}`,
      headers: request.headers.append(
        'Authorization',
        this.getAuthorizationHeader()
      ),
    });
    return next.handle(apiReq);
  }

  private getAuthorizationHeader(): string {
    const token = this.tokenService.getToken();
    return token ? 'Bearer ' + token : '';
  }
}
