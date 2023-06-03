import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../interfaces/auth-data';
import { RegistData } from '../interfaces/regist-data';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  
  LoginUser(email: string, password: string){  
    const authData: AuthData = {email: email, password: password} 
    
   return this.http.post("http://localhost:5000/login", authData , { observe: 'response'})
    
   
  }

registerUser(username : string ,email: string, password: string){
  const regData: RegistData = {username: username ,  email: email, password: password} 
  this.http.post("http://localhost:5000/register", regData , { observe: 'response'}
  ).subscribe((response)=>{
      console.log(response); 
  })
}

}




