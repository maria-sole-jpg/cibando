import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Password } from 'primeng/password';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl(false, [Validators.required])
  })


  constructor(private userService:UserService) {
  }

  onSubmit(){
    console.log(this.form.value);
    const dati = {nome: this.form.controls.name.value, email: this.form.controls.email}
    this.userService.datiUtente.next('Ciao. Hai inserito i seguenti dati: ' + dati);
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
