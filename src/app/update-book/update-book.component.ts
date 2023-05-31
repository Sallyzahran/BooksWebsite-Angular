import { BookInterface } from './../interfaces/book-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { BookApiService } from './../services/book-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  updateBookForm:FormGroup;
  categories!:any
  authors!:any
  selectedFile?: File;
  respone!:any;
  errorMessage!:string;
  id!:string
  book!:BookInterface;
  selectedCategoryId!:string
  selectedAuthorId!:string
  title!:string

  constructor(private bookService:BookApiService,private recive:ActivatedRoute , private router:Router){




   this.id= recive.snapshot.params['id']
    this.updateBookForm = new FormGroup({
       title: new FormControl('',Validators.required),
      categoryId: new FormControl('',Validators.required),
      authorId: new FormControl('',Validators.required),
      image: new FormControl ('')
      
    })
  }

   ngOnInit() {
    this.bookService.getBook(this.id).subscribe((value:BookInterface)=>this.book=value)
    this.bookService.getCategories().subscribe((value)=>{
      this.categories=value
   this.selectedCategoryId= this.categories?.find((category:any) => category._id == this.book.categoryId?._id)._id;
    }
    )
    this.bookService.getAuthors().subscribe((value)=>{
      this.authors=value
      this.selectedAuthorId= this.authors?.find((author:any) => author._id == this.book.authorId?._id)._id;
    })
    this.title=this.book?.title

  }

  onFileSelected(event:any)
  {
    this.selectedFile=event.target.files[0];
  }

updateBook(){
  console.log(this.updateBookForm.controls)
  const formData = new FormData();
  formData.append('title', this.updateBookForm.controls['title'].value);
  formData.append('categoryId', this.selectedCategoryId);
  formData.append('authorId', this.selectedAuthorId);
  if (this.selectedFile) {
    formData.append('image', this.selectedFile);
  }
  
   this.bookService.updateBook(formData,this.book._id).subscribe((value:any)=>{
    if(value.message){
    this.router.navigate(['/books'])

  }else{
    this.errorMessage="Please , Add all required input * "  

  }
})
  
}

}
