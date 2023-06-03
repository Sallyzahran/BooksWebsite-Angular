import { CanActivateFn, Router } from '@angular/router';

export const notGuestGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')) {
    const router = new Router;

    if(localStorage.getItem('isAdmin')){
      router.navigate(['/books'] );
    }
    else{
      router.navigate(['/book-list'] );
    }
    return false;
  } else {
  return true
  }};
