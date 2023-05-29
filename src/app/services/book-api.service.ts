import { BookInterface } from './../interfaces/book-interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
private path = 'http://localhost:5000/book'
  // private allBooks=new BehaviorSubject<BookInterface[]>([]);
  // Books=this.allBooks.asObservable();
  constructor(private http:HttpClient) { }

 getBooks(){
  return this.http.get(this.path);
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
  // AddProductToCart(product:Product):null{
  //   if(product.count){
  //      product.count++;
  //      return null;
  //   }
  //  product['count']=1
  //   this.productInCart.next(this.productInCart.value.concat(product));
  //   return null
  // }
  // deleteProduct(){

  //   // this.productInCart.next();

  // }
}
