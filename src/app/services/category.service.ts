
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { Book } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get<Category[]>(`http://localhost:5000/category/`);
  }


  getCategoryBooks(id: string){
    return this.http.get<Book[]>(`http://localhost:5000/category/${id}/book`);
  }

  deleteCategory(id: string){
    return this.http.delete(`http://localhost:5000/category/${id}`);
  }

  addCategory(category: any) {
    return this.http.post(`http://localhost:5000/category/`, category);
  }

  getCategiryId(id:string): Observable<any> {
    return this.http.get<Category>(`http://localhost:5000/category/${id}`);

  }

  UpdateCategory(id: string, category:any) {
    return this.http.put(`http://localhost:5000/category/${id}`, category);
  }



 

}



