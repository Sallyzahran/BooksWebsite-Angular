import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { Book } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


    localStorage !: Storage;
  headers!:HttpHeaders;

  constructor(private http:HttpClient,private router:Router) { 

    this.localStorage = window.localStorage;
     this.headers = new HttpHeaders()
    .set('x-access-token',String(this.localStorage.getItem('token')))

  }
    private authUpdated = new BehaviorSubject<object>({})
  authorUpdated = this.authUpdated.asObservable();


  getCategories(){
    return this.http.get<Category[]>(`http://localhost:5000/category/`,{headers:this.headers});
  }


  getCategoryBooks(id: string){
    return this.http.get<Book[]>(`http://localhost:5000/category/${id}/book`,{headers:this.headers});
  }

  deleteCategory(id: string){

    return this.http.delete(`http://localhost:5000/category/${id}`,{headers:this.headers});
  
  }

  addCategory(category: any) {

    return this.http.post(`http://localhost:5000/category/`, category,{headers:this.headers});
  
  }

  getCategiryId(id:string): Observable<any> {
    return this.http.get<Category>(`http://localhost:5000/category/${id}`,{headers:this.headers});
    

  }

  UpdateCategory(id: string, category:any) {

    return this.http.put(`http://localhost:5000/category/${id}`, category,{headers:this.headers});
  
  }



 

}



