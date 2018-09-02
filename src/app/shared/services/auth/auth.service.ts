import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(username: string, password: string): void {
    console.log('login() called: save user to local storage');
    localStorage.setItem('currentUser', JSON.stringify({ username: username, password: password }));
  }

  public logout(): void {
    console.log('logout() called: remove user from local storage');
    localStorage.removeItem('currentUser');
  }

  public isAuthenticated(): boolean {
    console.log('IsAuthenticated() called');
    return true;
  }

  public getUserInfo(): string {
    console.log('GetUserInfo() called: get username from local storage');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.username;
  }
}
