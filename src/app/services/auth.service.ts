import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../interfaces/auth-data';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  
  CreateUser(email: string, password: string){  
    const authData: AuthData = {email: email, password: password} 
    
    this.http.post("http://localhost:5000/login", authData , { observe: 'response'}
  
    
    
    )
    
    .subscribe((response: any) =>{  
      // console.log(response); 
    //  console.log(response.body.token);
     localStorage.setItem('token' , response.body.token)
     localStorage.setItem('userId' , response.body.userId)
     localStorage.setItem('isAdmin' , response.body.admin)
      // localStorage.getItem('token')
  
  })  
  }

 

//   private setSession(authResult: { expiresIn: any; idToken: string; }) {
//     const expiresAt = moment().add(authResult.expiresIn,'second');

//     localStorage.setItem('id_token', authResult.idToken);
//     localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
// }   

 

  // login(user: any) {
  //   return this.http.post('http://localhost:5000/login', user,
    
    
    
  //   );
  // }

}




