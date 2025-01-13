import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RecipesComponent } from '../recipes/recipes.component';
import { Recipe } from '../../models/recipes.model';
import { RecipesListComponent } from '../recipes/recipes-list/recipes-list.component';
@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  evidenziato = false;
  ricette: Recipe[] = [];

  constructor(private recipeService: RecipeService) //injection del servizio
    {
      this.recipeService.getRecipes().subscribe({
        next:(res) => { //azione che deve fare se res è vera
          this.ricette = res.sort((a,b) => b._id=1 - a._id).slice(0,4);
        },
        error: (e) => console.error(e)
      })
    }

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }

}
