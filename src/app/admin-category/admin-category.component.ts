import { Component } from '@angular/core';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {



categories !:Category[]


constructor(private categoryService:CategoryService,private router: Router){}

ngOnInit(){
  
this.categoryService.getCategories().subscribe((res:any) => this.categories=res)


}


deleteCategory(_id: string) {
  this.categoryService.deleteCategory(_id)
    .subscribe(() => {
      this.categories = this.categories.filter((category) => category._id !== _id);

    });


  
}

editCategory( id:any){

  this.router.navigate(['updateCategory',id])
}





}
