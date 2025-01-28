import { RecipeService } from './../../../services/recipe.service';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  standalone: false,

  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  private router = inject(Router);
  private recipeService = inject(RecipeService);
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    difficulty: new FormControl('', [Validators.required]),
    published: new FormControl('', [Validators.required])
  })

  constructor(private modalService: NgbModal){}

  onSubmit(){
    this.recipeService.addRecipe(this.form.value).subscribe({
      next: res => {
        this.router.navigateByUrl('ricette')
      },
      error: (e) => console.log(e)
    })
  }

  

}
