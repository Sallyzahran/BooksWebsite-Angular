import { BookInterface } from './../interfaces/book-interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
private path = 'http://localhost:5000/book'
  // private allBooks=new BehaviorSubject<BookInterface[]>([]);
  // Books=this.allBooks.asObservable();
  constructor(private http:HttpClient) { }
 getBooks(){
  return this.http.get<BookInterface[]>(this.path);
 }

 getBook(id:string){
  return this.http.get<BookInterface>(this.path+`/${id}`)
}

  addBook(body:any){

return this.http.post(this.path,body);
}

getAuthors(){
  return this.http.get('http://localhost:5000/author');
}

getCategories(){
  return this.http.get('http://localhost:5000/category');
}

updateBook(body:any,id:string){
  return this.http.put(this.path+`/${id}`,body);
}

deleteBook(id:string){

  return this.http.delete(this.path+`/${id}`)
}
//delete userId From Uri add token to header :D
getUserBook(userId:string){
return this.http.get(`http://localhost:5000/mybook/${userId}`)
}


addReview(id: string, body: any) {
  return this.http.post(`http://localhost:5000/review/${id}`, body);


}



}
