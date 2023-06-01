import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

categories !:Category[]

constructor(private categoryService:CategoryService){}

ngOnInit(){
  
this.categoryService.getCategories().subscribe((res:any) => this.categories=res)


}

 
}
