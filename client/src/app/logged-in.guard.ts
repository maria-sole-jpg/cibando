import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const loggedInGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isLogged() ? true : inject(Router).createUrlTree(['/login']);
};

