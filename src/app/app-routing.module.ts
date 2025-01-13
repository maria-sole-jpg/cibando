import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
// devo importare i componenti che voglio compaiano

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //posso anche mettere il component senza reindirizzarlo
  {path: 'home', component: HomeComponent}, //percorso, ossia il nome del link
  {path: 'ricette', component: RecipesComponent, children:[
    {path: 'dettaglio/:title/:_id', component: DetailComponent},
    {path: 'dettaglio/:_id', component: DetailComponent},
    {path: '', component: RecipesListComponent, pathMatch:'full'}
]},
{path:'**', redirectTo: 'home'}
];
//rotte



@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
