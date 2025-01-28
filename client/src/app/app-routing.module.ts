import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContattiComponent } from './components/user/contatti/contatti.component';
// devo importare i componenti che voglio compaiano
import { ProfileComponent } from './components/user/profile/profile.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //posso anche mettere il component senza reindirizzarlo
  {path: 'home', component: HomeComponent}, //percorso, ossia il nome del link
  {path: 'contatti', component: ContattiComponent},
  {path: 'login', loadChildren: () => import("./components/user/user.module").then(module => module.UserModule)},
  {path: 'ricette', loadChildren: () => import("./components/recipes/recipes.module").then(module => module.RecipesModule)},
  {path:'**', redirectTo: 'home'}
];
//rotte

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
