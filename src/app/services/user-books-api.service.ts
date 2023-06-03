import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserBooksApiService {
  localStorage !: Storage;
  headers!:HttpHeaders;


  private path = 'http://localhost:5000/mybook'
  constructor(private http:HttpClient) {

    this.localStorage = window.localStorage;
    this.headers = new HttpHeaders()
   .set('x-access-token',String(this.localStorage.getItem('token')))
   }

  allUserBook()
  {
    return this.http.get(this.path ,{headers:this.headers})
  }

  AddStatus(status:string,bookId:string)
  {
    return this.http.post(this.path+`/${bookId}`,{status},{headers:this.headers})
  }

  getStatusOfUserBook(bookId:string)
  {
    return this.http.get(this.path+`/status/${bookId}`,{headers:this.headers})
  }
  getBookByStatus(status:string){
   return this.http.get(this.path+`/${status}`,{headers:this.headers})
  }

  getAvgRate(bookId:string){
    return this.http.get(`http://localhost:5000/review/${bookId}/avgRate`,{headers:this.headers})
  }
}
