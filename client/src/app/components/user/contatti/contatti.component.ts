import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  standalone: false,

  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
})
export class ContattiComponent {
  private router= inject(Router);
  private userService = inject(UserService);
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    oggetto: new FormControl('', [Validators.required]),
    messaggio: new FormControl('', [Validators.required])
  })

}
