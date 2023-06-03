import { Router } from '@angular/router';
import { Component ,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 

export class LoginComponent  {
 
loclStorage!:Storage

  constructor(public authService: AuthService,private router:Router){
    this.loclStorage=window.localStorage
  } 
 
  // login(form: NgForm){  
     
  // }
  

 
  whenSubmit(form :NgForm){
    if(form.invalid){  
      return;  
    }  
    this.authService.LoginUser(form.value.email, form.value.password);
    if(this.loclStorage.getItem('isAdmin')){
      this.router.navigate(['books'])
     }else if(this.loclStorage.getItem('token'))
     this.router.navigate(['book-list'])
     else
     this.router.navigate(['/login']);
 
  }

}
