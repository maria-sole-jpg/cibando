import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).getRole() ? true : inject(Router).createUrlTree(['/ricette']);
};
