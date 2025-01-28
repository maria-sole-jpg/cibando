import { Password } from 'primeng/password';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl = 'api/users'; //chiama le rotte per fare il login; rotte del servizio

  constructor(
    private http: HttpClient,
    private userService: UserService) {}

  saveStorage(res) {
    const user = {
      id: res.id,
      name: res.name,
      email: res.email,
      password: res.password,
      admin: res.admin
    } //dati che voglio immagazzinare ogni volta che qualcuno fa il login

    localStorage.setItem('user', JSON.stringify(user))
  }

  login(email: string, password: string){
    //non c'è bisogno che gli dica che riceverà un observable
    const user = { email: email, password: password };
    return this.http.post(`${this.apiBaseUrl}/login`, user)
  }

  //metodo che mi controlla se la persona è loggata o meno
  isLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) !==null
  }

  logout() {
    localStorage.removeItem('user');
  }
// i login sono tutti localstorage!!
// il cookie è un local storage temporizzato. non esiste in realtà; è tutta libreria
// la session storage ha un tempo limitato

  getRole(): boolean{
  return true;
  }

}
