import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Password } from 'primeng/password';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  private router = inject(Router);
 private userService = inject(UserService)
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl(false, [Validators.required])
  })


// constructor(private userService:UserService) { }

  onSubmit(){
    console.log(this.form.value);
    const dati = {nome: this.form.controls.name.value, email: this.form.controls.email}
    this.userService.datiUtente.next('Ciao. Hai inserito i seguenti dati: ' + dati);
    this.router.navigateByUrl('home'); //è esattamente il routerLink:
    this.router.navigate(['home']); //routerLink fatto dentro la classe ^^ sono la stessa cosa
  }

  scriviInNome(e){
    console.log(e);
  }

  isEqual;

  comparaPassword(e){
    if(this.form.value.password == e){
      this.isEqual = true;
    } else if (this.form.value.password != e){
      this.isEqual = false;
    }
  }

  convalidaForm(): boolean{
    if(this.form.valid && this.comparaPassword){
      return false
    } else {
      return true
    }
  }

}
