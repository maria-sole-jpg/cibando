import { Component } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';
@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  ricette: Recipe[] = [];
  titoloRicevuto: any;
  constructor(private recipeService: RecipeService) //injection del servizio
  {
    this.recipeService.getRecipes().subscribe({
      next:(res) => { //azione che deve fare se res è vera
        this.ricette = res;
      },
      error: (e) => console.error(e)
    })
  }

  riceviTitolo(event: any)//riceve un evento
  {
    this.titoloRicevuto = event;
  }
}
