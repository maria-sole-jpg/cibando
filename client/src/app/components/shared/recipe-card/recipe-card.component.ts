import { Recipe } from './../../../models/recipes.model';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RecipeService } from '../../../services/recipe.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  private sanitizer = inject(DomSanitizer);
  //La card ha una sola ricetta: tolgo recipes e metto recipe
  @Input() recipe: Recipe | undefined; //le ricette non le ha: le deve passare qualcuno. c'è bisogno di un padre che gli passi i dati
  @Input() page: string;
  @Output() messaggio = new EventEmitter(); //Devo lavorare insieme all'event emitter, che permette di emettere un evento
  //a ogni variabile che vuoi, posso emettere un evento.


  private recipeService = inject(RecipeService);
  private router = inject(Router);
  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    difficulty: new FormControl(0),
    published: new FormControl(false)
  })

  inviaTitolo(titolo: string) {
    // Se viene richiamato inviaTitolo, this.messaggio emette un evento. messaggio è uguale ad un nuovo emettitore
    this.messaggio.emit(titolo);

  }
  //prezzo: number | undefined | null;

  getSanitizeHTML(descrizione: string): SafeHtml {
    const tagliaDescrizione = this.accorciaDescrizione(descrizione);
    const sanificaDescrizione = this.sanitizer.bypassSecurityTrustHtml(tagliaDescrizione);
    return sanificaDescrizione;
  }

  accorciaDescrizione(descrizione: string): string {
    const lunghezzaDescrizione = 200;
    if(descrizione.length <= lunghezzaDescrizione){
      return descrizione.slice(0, lunghezzaDescrizione)
    } else {
      const ultimaPosizioneSpazio = descrizione.lastIndexOf(' ', lunghezzaDescrizione)
      return descrizione.slice(0, ultimaPosizioneSpazio);
    }
  }

  onSubmit(){
    this.recipeService.removeRecipe(this.form.value).subscribe({
      next: res => {
        this.router.navigateByUrl('home')
      },
      error: (e) => console.log(e)
    })
  }

} //creo una variabile con il modello già creato e dopo aver modificato il core di angular (primo import modifico la variabile)
