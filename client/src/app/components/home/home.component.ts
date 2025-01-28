import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipes.model';
import { UserService } from '../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('modaleRegistrazione') modale : ElementRef;

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
      this.openModal(this.modale) //Quando riceviamo qualcosa dal nostro subject
      this.recipeService.getRecipes().subscribe({
        next:(res) => { //azione che deve fare se res è vera
          this.ricette = res.sort((a,b) => b._id=1 - a._id).slice(0,4);
        },
        error: (e) => console.error(e)
      });
}

ngAfterViewInit(): void{
  this.UserService.datiUtente.subscribe( res => {
    console.log(res);
    localStorage.setItem('datiReg', JSON.stringify(res) )
    this.datiRegistrazione = res;
 //   this.openModal(this.modaleRegistrazione); ????????????????????????
  });
 }

/* ngOnInit(): void {
this.UserService.datiUtente.subscribe()

   if(localStorage.getItem('datiReg')){
  this.datiRegistrazione = JSON.parse(localStorage.getItem('datiReg'));
  localStorage.removeItem('datiReg');
  this.openModal(this.modale);
  }
} */

    openModal(content: any, id?: string, nome?:string, cognome?: string){
      this.idModale = id;
      this.nomeModale = nome;
      this.modalService.open(content,{centered:true,ariaLabelledBy:'Modale di Benvenuto',size: 'lg'}).result.then(
        (res) => {
          console.log('azione da eseguire' + res);
          this.UserService.datiUtente.next(null);
        })
      .catch((error) => console.log('nessuna azione da eseguire'))
    }


  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }

}
