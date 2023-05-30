import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../interfaces/category';
@Component({
  selector: 'app-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.css']
})
export class CategoryBooksComponent {

    categories :Category[] =[

    ]
   selectedCategory: Category |undefined ;  

  
 
constructor(private activateRoute:ActivatedRoute ){}


ngOnInit(){
  // console.log(this.activatedRouter)
  
  console.log(this.activateRoute.snapshot.params['_id'])
  // console.log(this.categories.find(category => category._id ==this.activateRoute.snapshot.params['_id']))

this.selectedCategory = this.categories.find(category => category._id ==this.activateRoute.snapshot.params['_id'])
console.log(this.selectedCategory)
}

}
