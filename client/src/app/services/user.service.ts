import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiBaseUrl = 'api/recipes';
  datiUtente = new Subject();

  constructor(private http: HttpClient) {}

  saveUser(user:any) {
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, user);
  }

  getUserDetail(email){
    const body = { email : email}
    return this.http.post(`${this.apiBaseUrl}/user`, body);
  }
}
