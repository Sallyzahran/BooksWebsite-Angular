import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserBooksApiService {
  private path = 'http://localhost:5000/mybook'
  constructor(private http:HttpClient) { }

  allUserBook(userId:string){
    return this.http.get(this.path+`/${userId}`)
  }

}
