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
    
    this.http.post("http://localhost:5000/login", authData , { observe: 'response'}
  
    
    
    )
    
    .subscribe((response: any) =>{  
      // console.log(response); 
    //  console.log(response.body.token);
     localStorage.setItem('token' , response.body.token)
     localStorage.setItem('userId' , response.body.userId)
     if(response.body.admin){
           localStorage.setItem('isAdmin' , response.body.admin)
     }
      // localStorage.getItem('token')
  
  })  
  }

registerUser(username : string ,email: string, password: string){
  const regData: RegistData = {username: username ,  email: email, password: password} 
  this.http.post("http://localhost:5000/register", regData , { observe: 'response'}
  ).subscribe((response)=>{
      console.log(response); 
  })
}

}




