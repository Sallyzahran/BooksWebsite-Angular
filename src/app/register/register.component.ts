import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  registerForm : FormGroup
  constructor(public authService: AuthService){
   this.registerForm = new FormGroup({
    username : new FormControl(null, [Validators.required]),
    
     email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password : new FormControl(null, [Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[`!@#$%\^&*\-_=\+'/\.,]){1}).{8,}$/)])
    })
  }
  
  submitRegisterForm(){
   console.log(this.registerForm);
   
  }
  register(form: FormGroup){  
    if(form.invalid){  
      console.log('error');
       ;  
    }  
    this.authService.registerUser(form.value.username,form.value.email, form.value.password);  
  }  
}
