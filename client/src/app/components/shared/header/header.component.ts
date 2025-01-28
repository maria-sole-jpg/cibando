import { AuthService } from './../../../services/auth.service';
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

interface User{
  id: string,
  name: string,
  email: string,
  password: string
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck{
  isCollapsed = true;
  user: User;

  constructor(
    private router: Router,
    public authService: AuthService
  ){}

  ngDoCheck(): void { //lifecicle che va in ascolto di eventuali cambiamenti
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
