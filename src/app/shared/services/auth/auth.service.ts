import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(): void {
    console.log('login() called');
  }

  public logout(): void {
    console.log('logout() called');
  }

  public isAuthenticated(): boolean {
    console.log('IsAuthenticated() called');
    return true;
  }

  public getUserInfo(): void {
    console.log('GetUserInfo() called');
  }
}
