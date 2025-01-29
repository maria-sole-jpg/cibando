import { Injectable } from '@angular/core';
import { RECIPES } from './../mocks/recipes.mock';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipes.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  })
  export class RecipeService {
  apiBaseUrl = 'api/recipes';
  constructor(private http: HttpClient) { }

 // getRecipes():Observable<Recipe[]>{
    getRecipes() {
    return this.http.get<Recipe[]>( `${this.apiBaseUrl}/` ) //il backtick è un valore stringa ma dentro posso inserire anche valori di variabili
    //  return of (RECIPES);  mock dei dati
  }

  getDetail(id:string): Observable<Recipe | undefined>{
  //  const recipe = RECIPES.find(ricetta => ricetta._id === id);
  //  return of(recipe); //of si usa coi dati mockati
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  addRecipe(recipe:any): Observable<any>{
    return this.http.post<any>(`${this.apiBaseUrl}/`, recipe)
  }

  removeRecipe(recipe:any){
   return this.http.delete<any>(`${this.apiBaseUrl}/ricette/${recipe.id}`, recipe)
  }

  updateRecipe(recipe:any){
    return this.http.put<any>(`${this.apiBaseUrl}/ricette/${recipe.id}`, recipe)
  }

  searchBar(recipe:any): Observable<any>{
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${recipe.title} || ${recipe.description}`)
  }

}
