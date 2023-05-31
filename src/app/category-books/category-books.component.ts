import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../interfaces/category';
import { Book } from '../interfaces/category';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.css']
})
 export class CategoryBooksComponent {


  
categoryBooks: Book[] = [];
categoryId: string = '';
 
constructor(private activateRoute:ActivatedRoute , private categoryservice:CategoryService ){}


ngOnInit():void{


  this.activateRoute.params.subscribe(params => {
    this.categoryId = params['id'];
    this.CategoryBooks();
  });


}


CategoryBooks() {
  this.categoryservice.getCategoryBooks(this.categoryId).subscribe((data: Book[]) => {
    this.categoryBooks = data;
  });

}
 }