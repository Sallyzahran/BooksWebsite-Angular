import Swal from "sweetalert2";
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
 
  login(form: NgForm){  
     
  }
  

 
  whenSubmit(form :NgForm){
    if(form.invalid){  
      return;  
    }  
    this.authService.LoginUser(form.value.email, form.value.password).subscribe((response: any) =>{  
    
     localStorage.setItem('token' , response.body.token)
     localStorage.setItem('userId' , response.body.userId)
     if(response.body.admin){
           localStorage.setItem('isAdmin' , response.body.admin)
     }
     
     if(this.loclStorage.getItem('isAdmin')){
      this.router.navigate(['books'])
     }else if(this.loclStorage.getItem('token')){
      this.router.navigate([''])

     }
  },(error: any) => {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error occurred while logging in.',
      confirmButtonText: 'OK'
    });
  })  
    
 
  }

}
