import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//RouterModule per far capire che è un modulo di rotte; Routes per dichiarare le rotte
import { RecipesComponent } from '../recipes/recipes.component';
import { DetailComponent } from '../recipes/detail/detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

const routes: Routes = [
    { path: '', component: RecipesComponent, children:[
//      {path: ''}
      {path: 'dettaglio/:title/:_id', component: DetailComponent},
      {path: 'dettaglio/:_id', component: DetailComponent}
    ]}
]

@NgModule({
  imports:[RouterModule.forChild(routes)], //unica differenza con app routing module
  exports:[RouterModule] //tutti i moduli figlio devono avere il forChild()
})

export class RecipesRoutingModule { }
