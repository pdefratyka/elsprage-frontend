import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getUserId() {
    const decodedToken: any = jwt_decode(localStorage.getItem('TOKEN'))
    console.log(decodedToken.userId);
  }

  getToken(): string {
    return localStorage.getItem('TOKEN');
  }

  setToken(token: string): void {
    console.log("Set token:" + token);
    localStorage.setItem('TOKEN', token);
  }
}
