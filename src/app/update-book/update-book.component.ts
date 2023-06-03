import { CategoryService } from './../services/category.service';
import { AuthorApiService } from './../services/author-api.service';
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
  selectedCategoryId!:any
  selectedAuthorId!:any
  title!:string

  constructor(private bookService:BookApiService,private recive:ActivatedRoute , private router:Router,
    private authorService:AuthorApiService,private categoryService:CategoryService){




   this.id= recive.snapshot.params['id']
    this.updateBookForm = new FormGroup({
       title: new FormControl('',Validators.required),
      categoryId: new FormControl('',Validators.required),
      authorId: new FormControl('',Validators.required),
      image: new FormControl ('')
      
    })

    this.bookService.getBook(this.id).subscribe((value:BookInterface)=>this.book=value)
    this.categoryService.getCategories().subscribe((value)=>{
      this.categories=value
      console.log(this.categories)
   this.selectedCategoryId= this.categories?.find((category:any) => category?._id == this.book?.categoryId?._id);
    }
    )
    this.authorService.getAllAuthors().subscribe((value)=>{
      this.authors=value
      this.selectedAuthorId= this.authors?.find((author:any) => author?._id == this.book.authorId?._id);
    })
    this.title=this.book?.title
  }

   async ngOnInit() {
  

  }

  onFileSelected(event:any)
  {
    this.selectedFile=event.target.files[0];
  }

updateBook(){
  console.log(this.updateBookForm.controls)
  const formData = new FormData();
  formData.append('title', this.updateBookForm.controls['title'].value);
  formData.append('categoryId', this.updateBookForm.controls['categoryId']?.value);
  formData.append('authorId', this.updateBookForm.controls['authorId']?.value);
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
