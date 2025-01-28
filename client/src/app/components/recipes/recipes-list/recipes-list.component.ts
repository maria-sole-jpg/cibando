import { Component, inject } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';
import { map, Observable, take } from 'rxjs';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {

  recipeService = inject(RecipeService);

  ricette: Recipe[] = [];
  titoloRicevuto: any;
  first: number = 0;
  rows: number = 10;
  page = 1;
  size = 4;

  recipes$ = this.recipeService.getRecipes().pipe(
    map(response => response.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 3)), //il map prende l'oggetto e lo mappa. farà quello che gli dico per ogni elemento degli array
    map(res => this.totaleRicette = res)
    //on facciamo la subscribe perché è lui l'observable
  )
  //recipes$: Observable<Recipe[]> = this.recipeService.getRecipes();
  totaleRicette: Recipe[];

  constructor() //injection del servizio ---> prima (private recipeService: RecipeService)
  {
    /* this.recipeService.getRecipes().pipe(take(1)).subscribe({
      next:(res) => { //azione che deve fare se res è vera
        console.log(res);
        this.ricette = res.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        //  this.ricette = res;
      },
      error: (e) => console.error(e)
    }) */
    this.getRecipes();
  }

  getRecipes(){
    this.recipeService.getRecipes().pipe(take(1)).subscribe({
      next:(res) => { //azione che deve fare se res è vera
        console.log(res);
        this.ricette = res.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        //  this.ricette = res;
      },
      error: (e) => console.error(e)
    })
  }

  onPageChange(event) {
    event.page = event.page + 1;
    this.page = event.page;
  }

  riceviTitolo(event: any)//riceve un evento
  {
    this.titoloRicevuto = event;
  }

}
