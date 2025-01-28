import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { FloatLabelModule } from 'primeng/floatlabel';
import { EditorModule } from 'primeng/editor';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeCardComponent } from '../shared/recipe-card/recipe-card.component';
import { AddComponent } from '../shared/add/add.component';
import { DetailComponent } from '../recipes/detail/detail.component';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeCardComponent,
    DetailComponent,
    AddComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    RecipesRoutingModule,
    EditorModule,
    HttpClientModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    EditorModule,
    NgbModule,
    NgbCollapseModule
  ],
  exports: [
    RecipeCardComponent,
    RecipesListComponent
  ] // componenti che sono condivisi
})

export class RecipesModule { }
