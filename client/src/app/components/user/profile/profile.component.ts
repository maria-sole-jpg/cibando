import { UserService } from './../../../services/user.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private UserService = inject(UserService);
  user = null;
  email;

  constructor(){
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.email = JSON.parse(localStorage.getItem('user')).email;
    }
    if(this.email){
      this.getUser()
    }
  }

  getUser(){
    this.UserService.getUserDetail(this.email).subscribe({
      next: (res) => {
        this.user = res
      },
      error: (e) => console.log(e)
    })
  }
  
}
