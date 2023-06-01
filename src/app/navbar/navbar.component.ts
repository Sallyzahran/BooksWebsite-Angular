import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthService ,private route : Router){
  } 
  onLogout() {
  
    // localStorage.removeItem('token');
    localStorage.clear();
    this.route.navigate(['login']);
    
  }
   
  }



