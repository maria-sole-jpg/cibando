import { NumberSymbol } from "@angular/common";

export interface Recipe{
  _id: number;
  title: string;
  description: string;
  image: string;
  difficulty: number;
  date: string;
  createdAt?: string;
  published: boolean;
  //note?:string; attributo opzionale

}
