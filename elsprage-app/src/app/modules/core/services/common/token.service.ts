import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  getToken(): string {
    return localStorage.getItem('TOKEN');
  }

  setToken(token: string): void {
    localStorage.setItem('TOKEN', token);
  }
}
