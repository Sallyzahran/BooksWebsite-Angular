import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-update-category',
  templateUrl: './admin-update-category.component.html',
  styleUrls: ['./admin-update-category.component.css']
})
export class AdminUpdateCategoryComponent {


name !:string
  constructor(private formBuilder:FormBuilder , private categoryService:CategoryService, private router:ActivatedRoute   ){}
  
  formValue = new FormGroup({

    name: new FormControl('')
  });


ngOnInit(): void{
  console.log(this.router.snapshot.params['id'])
  this.categoryService.getCategiryId(this.router.snapshot.params['id']).subscribe((res:any)=>{
    console.log(res)

    
    
 this.formValue = new FormGroup({

    name: new FormControl(res['name'])
  });


  })

}

updateCategory(){

this.categoryService.UpdateCategory(this.router.snapshot.params['id'],this.formValue.value).subscribe((res)=>{
  console.log(res)
})

}
  

}
