import { Component } from '@angular/core';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  this.categoryService.deleteCategory(_id).subscribe((res: any) => {
    if (res && res.message == 'Unable to delete category because there are books associated with this category') {
      Swal.fire({
        icon: 'error',
        title: 'Unable to delete category',
        text: 'There are books associated with this category',
        confirmButtonText: 'OK'
      });
    } else {
      this.categories = this.categories.filter((category) => category._id !== _id);
    }
    });
  }
    
  




editCategory( id:any){

  this.router.navigate(['updateCategory',id])
}





}








