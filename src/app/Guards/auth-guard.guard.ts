import { Router, CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {

  if (localStorage.getItem('token')) {
    return true;
  } else {
    const router = new Router;
    router.navigate(['/login'] );
    return false;
  }
};