import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() recipes: Recipe[] | undefined; //le ricette non le ha: le deve passare qualcuno. c'è bisogno di un padre che gli passi i dati
  @Output() messaggio = new EventEmitter(); //Devo lavorare insieme all'event emitter, che permette di emettere un evento
  //a ogni variabile che vuoi, posso emettere un evento.

  inviaTitolo(titolo: string) {
    // Se viene richiamato inviaTitolo, this.messaggio emette un evento. messaggio è uguale ad un nuovo emettitore
    this.messaggio.emit(titolo);
    
  }
  //prezzo: number | undefined | null;
} //creo una variabile con il modello già creato e dopo aver modificato il core di angular (primo import modifico la variabile)
