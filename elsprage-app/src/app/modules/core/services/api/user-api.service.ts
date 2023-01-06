import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserRequest } from 'src/app/modules/shared/models/requests/create-user-request';
import { LoginRequest } from 'src/app/modules/shared/models/requests/login-request';
import { CreateUserResponse } from 'src/app/modules/shared/models/responses/create-user-response';
import { LoginResponse } from 'src/app/modules/shared/models/responses/login-response';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private readonly httpClient: HttpClient) { }

  createUser(createUserRequest: CreateUserRequest): Observable<CreateUserResponse> {
    return this.httpClient
      .post<CreateUserResponse>('/users', createUserRequest);
  }

  login(loginUserRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>('/authentication/login', loginUserRequest);
  }
}
