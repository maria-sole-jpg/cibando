import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RecipeService } from '../../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: false,

  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
   private router = inject(Router);
   private recipeService = inject(RecipeService);

   form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      difficulty: new FormControl('', [Validators.required]),
      published: new FormControl('', [Validators.required])
    })

    onSubmit() {
    this.recipeService.updateRecipe(this.form.value).subscribe({
      next: res => {
        this.router.navigateByUrl('ricette')
      },
      error: (e) => console.log(e)
    })
    }

}
