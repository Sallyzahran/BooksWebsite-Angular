import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../interfaces/author';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorApiService {
  
  localStorage !: Storage;
  headers!:HttpHeaders;


  constructor(private http: HttpClient,private router:Router) {

    this.localStorage = window.localStorage;
     this.headers = new HttpHeaders()
    .set('x-access-token',String(this.localStorage.getItem('token')))

   }

  // author : Author[] = [];
  private authUpdated = new BehaviorSubject<object>({})
  authorUpdated = this.authUpdated.asObservable();

  getBooks(){
    return this.http.get(`http://localhost:5000/book/`,{headers:this.headers});
  }

  getAllAuthors () {
        return this.http.get(`http://localhost:5000/author/`,{headers:this.headers});
  }

  getAuthorById(id : number) {
   
    return this.http.get(`http://localhost:5000/author/${id}`,{headers:this.headers});
  
  }

  addAuthor(body : any) {
    return this.http.post(`http://localhost:5000/author/`, body,{headers:this.headers});
    
  }

  updateAuthor(id: number, body : any) {
    if(this.localStorage.getItem("isAdmin"))
    return this.http.put(`http://localhost:5000/author/${id}`, body,{headers:this.headers});
    else{
      this.router.navigate(['**']);
      return this.authUpdated
    }
  }

  deleteAuthor(id : number) {
    if(this.localStorage.getItem("isAdmin"))
    return this.http.delete(`http://localhost:5000/author/${id}`,{headers:this.headers});
    else{
      this.router.navigate(['**']);
      return this.authUpdated
    }
  }

  getBook(id : number) {
    return this.http.get(`http://localhost:5000/author/${id}/book`,{headers:this.headers});
  }
}
