import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserBooksApiService {
  private path = 'http://localhost:5000/mybook'
  constructor(private http:HttpClient) { }

  allUserBook()
  {
    return this.http.get(this.path)
  }

  AddStatus(status:string,userId:string,bookId:string)
  {
    return this.http.post(this.path+`/${userId}/${bookId}`,{status})
  }

  getStatusOfUserBook(userId:string,bookId:string)
  {
    return this.http.get(this.path+`/status/${userId}/${bookId}`)
  }
  getBookByStatus(userId:string,status:string){
   return this.http.get(this.path+`/${status}/${userId}`)
  }

  getAvgRate(bookId:string){
    return this.http.get(`http://localhost:5000/review/${bookId}/avgRate`)
  }
}
