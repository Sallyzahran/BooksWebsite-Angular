import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm : FormGroup
  constructor(){
   this.registerForm = new FormGroup({
     firstName : new FormControl(null, [Validators.required]),
     lastName : new FormControl(null, [Validators.required]),
     email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password : new FormControl(null, [Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[`!@#$%\^&*\-_=\+'/\.,]){1}).{8,}$/)])
    })
  }
  submitRegisterForm(){
   console.log(this.registerForm);
   
  }
}
