import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl: string = "https://localhost:44373/api/Authentication/";

  constructor(private http: HttpClient) { }

  
  auth(user) {
    return this.http.post(this.baseUrl, user);
  }

  get getToken(){
    return localStorage.getItem("user_token");
  }

  get getRefreshToken(){
    return localStorage.getItem("user_refreshToken");
  }

  get isAuthenticated(){
    return !!localStorage.getItem("user_token");
  }
}
