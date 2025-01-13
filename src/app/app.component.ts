import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cibando';

  allievi = ['Davide','Franceso','Maria Sole','Gioele'];

  allieviCompleta = [
    {id:1,nome:'Davide',cognome:'Rossi'},
    {id:1,nome:'Francesco',cognome:'Verdi'},
    {id:1,nome:'Maria Sole',cognome:'Bianchi'},
    {id:1,nome:'Gioele',cognome:'Rossi'}
  ];

}
