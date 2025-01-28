import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';

import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { ContattiComponent } from "./contatti/contatti.component";
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations:[
  RegistrationComponent,
  LoginComponent,
  ProfileComponent,
  ContattiComponent
  ],
  imports:[
      FormsModule,
      ReactiveFormsModule,
      DividerModule,
      PasswordModule,
      FloatLabelModule,
      ButtonModule
    ],
  exports:[]
})

export class UserModule {}
