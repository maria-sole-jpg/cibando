import { Component, inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{
  private RecipeService = inject(RecipeService);
  private activatedRoute = inject(ActivatedRoute);
  private Router = inject(Router);

  ricetta: Recipe | undefined;

  percorsoStelline = "../../../../assets/images/difficolta-";

  ngOnInit():void{
    this.onGetDetail();
  }


  onGetDetail(){

  //  const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'))
    const id = this.activatedRoute.snapshot.paramMap.get('_id')
    if(id){
    this.RecipeService.getDetail(id).subscribe({
      next: res => {
        this.ricetta = res;
        },
      error: e => console.log(e)
      })
    }
  }

  onGetDetail2():void {
    this.activatedRoute.params.subscribe((urlParams) => {
      const id = urlParams['_id'];
    //  const idNumerico = Number(id);
      if(id){
        this.RecipeService.getDetail(id).subscribe(res => this.ricetta = res);
      }

  //const id = Number(urlParams['id'])
  //se nel routing ho messo id e altro posso scegliere il parametro di ricerca
  //  const title = urlParams['title'];
    })
  }
}
