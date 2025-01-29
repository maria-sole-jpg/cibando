import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: 'registrazione', component: RegistrationComponent },
    { path: 'login', component: LoginComponent }
  //{path: 'profile', component: ProfileComponent, canActivate:[loggedInGuard]},

]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class UserRoutingModule {}
