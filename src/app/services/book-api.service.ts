import { BookInterface } from './../interfaces/book-interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  localStorage !: Storage;
  headers!:HttpHeaders;
private path = 'http://localhost:5000/book'
  // private allBooks=new BehaviorSubject<BookInterface[]>([]);
  // Books=this.allBooks.asObservable();
  constructor(private http:HttpClient,private router:Router) { 

    this.localStorage = window.localStorage;
    this.headers = new HttpHeaders()
   .set('x-access-token',String(this.localStorage.getItem('token')))

  }

  private authUpdated = new BehaviorSubject<object>({})
  authorUpdated = this.authUpdated.asObservable();
 getBooks(){
  return this.http.get<BookInterface[]>(this.path,{headers:this.headers});
 }

 getBook(id:string){
  return this.http.get<BookInterface>(this.path+`/${id}`,{headers:this.headers})
}

  addBook(body:any){

return this.http.post(this.path,body,{headers:this.headers});
}

getAuthors(){
  return this.http.get('http://localhost:5000/author',{headers:this.headers});
}

getCategories(){
  return this.http.get('http://localhost:5000/category',{headers:this.headers});
}

updateBook(body:any,id:string){
  return this.http.put(this.path+`/${id}`,body,{headers:this.headers});
}

deleteBook(id:string){

  return this.http.delete(this.path+`/${id}`,{headers:this.headers})
}
//delete userId From Uri add token to header :D
getUserBook(userId:string){
return this.http.get(`http://localhost:5000/mybook/`,{headers:this.headers})
}


addReview(id: string, body: any) {
  return this.http.post(`http://localhost:5000/review/${id}`, body,{headers:this.headers});


}



}
