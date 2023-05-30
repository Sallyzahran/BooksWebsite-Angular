import { Component } from '@angular/core';

import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css']
})
export class AdminAddCategoryComponent {

  formValue !:FormGroup;
  categories: Category = {} as Category;

  constructor(private formBuilder:FormBuilder , private categoryService:CategoryService){}


ngOnInit(): void{

this.formValue = new FormGroup({

  name: new FormControl('',Validators.required)
});

}

addCategory(){

this.categories.name = this.formValue.value.name;
this.categoryService.addCategory(this.categories).subscribe((res:any) => this.categories=res)



}
   

}



















