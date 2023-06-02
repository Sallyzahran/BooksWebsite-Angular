import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  localStorage !: Storage;
  constructor(public authService: AuthService ,private route : Router ){
   this.localStorage = window.localStorage;
  } 

  onLogout() {
  
    // localStorage.removeItem('token');
    localStorage.clear();
    this.route.navigate(['login']);
    
  }

  isLoggedIn() {
    return this.localStorage.getItem('token') !== null;
  }
   isAdmin(){
    console.log( Boolean(this.localStorage.getItem('isAdmin')))
    return Boolean(this.localStorage.getItem('isAdmin'))

   }
  }



