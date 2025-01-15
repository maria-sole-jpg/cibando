import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RecipesComponent } from '../recipes/recipes.component';
import { Recipe } from '../../models/recipes.model';
import { RecipesListComponent } from '../recipes/recipes-list/recipes-list.component';
import { UserService } from '../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  evidenziato = false;
  ricette: Recipe[] = [];
  datiRegistrazione = {};
  idModale = '';
  nomeModale = '';

  constructor(private recipeService: RecipeService,
    private UserService: UserService,
    private modalService: NgbModal
  ) //injection del servizio
    {
      this.recipeService.getRecipes().subscribe({
        next:(res) => { //azione che deve fare se res è vera
          this.ricette = res.sort((a,b) => b._id=1 - a._id).slice(0,4);
        },
        error: (e) => console.error(e)
      });

  this.UserService.datiUtente.subscribe( res => {
    console.log(res);
    this.datiRegistrazione = res;
   });
  }
    openModal(content: any, id?: string, nome?:string, cognome?: string){
      this.idModale = id;
      this.nomeModale = nome;
      this.modalService.open(content,{centered:true,ariaLabelledBy:'Modale di Benvenuto',size: 'lg'}).result.then(
        (res) => {
          console.log('azione da eseguire' + res);
        }
      )
      .catch((error) => console.log('nessuna azione da eseguire'))
    }


  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }

}
