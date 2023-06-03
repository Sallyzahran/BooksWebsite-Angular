import { CanActivateFn, Router } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('isAdmin')) {
    return true;
  } else {
    const router = new Router;
    router.navigate(['book-list']);
    return false;
  }};
