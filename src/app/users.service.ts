import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "https://localhost:44373/api/user/";

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get(this.baseUrl);
  }


}
