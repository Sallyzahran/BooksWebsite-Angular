import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../interfaces/author';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorApiService {

  constructor(private http: HttpClient) { }

  // author : Author[] = [];
  // private authUpdated = new BehaviorSubject<Author[]>([])
  // authorUpdated = this.authUpdated.asObservable();

  getBooks(){
    return this.http.get(`http://localhost:5000/book/`);
  }

  getAllAuthors () {
    return this.http.get(`http://localhost:5000/author/`);
  }

  getAuthorById(id : number) {
    return this.http.get(`http://localhost:5000/author/${id}`);
  }

  addAuthor(body : any) {
    return this.http.post(`http://localhost:5000/author/`, body);
  }

  updateAuthor(id: number, body : any) {
    return this.http.put(`http://localhost:5000/author/${id}`, body);
  }

  deleteAuthor(id : number) {
    return this.http.delete(`http://localhost:5000/author/${id}`);
  }
}
