import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JWTAuthService {
  private serverUrl = 'http://www.your-server.com';

  constructor(private http: HttpClient) { }

  loginUser(email, password) {
    return this.http.post<{access_token: string}>(`${this.serverUrl}/auth/login`, {email, password}).pipe(tap(
      res => localStorage.setItem('access_token', res.access_token)));
  }

  registerUser(email, password) {
    return this.http.post<{access_token: string}>(`${this.serverUrl}/auth/register`, {email, password}).pipe(tap(
      res => this.loginUser(email, password)));
  }

  logoutUser() {
    localStorage.removeItem('access_token');
  }

  // property that verifies if a user is logged in
  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !==  null;
  }



}
