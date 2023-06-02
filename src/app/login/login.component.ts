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
    if(this.loclStorage.getItem('token')){
      if(this.loclStorage.getItem('isAdmin')){
         this.router.navigate(['books'])
        }
      this.router.navigate([''])
    }
  } 
 
  login(form: NgForm){  
    if(form.invalid){  
      return;  
    }  
    this.authService.LoginUser(form.value.email, form.value.password);  
  }
  

 
  whenSubmit(form :NgForm){
    if(this.loclStorage.getItem('isAdmin')){
      this.router.navigate(['books'])
     }
   this.router.navigate([''])
 
  }

}
