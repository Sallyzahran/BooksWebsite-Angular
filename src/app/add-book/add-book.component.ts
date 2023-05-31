import { BookInterface } from './../interfaces/book-interface';
import { BookApiService } from './../services/book-api.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  
  respone!:any;
  AddBookForm:FormGroup;
  categories!:any
  authors!:any
  selectedFile?: File;
  errorMessage!:string;
  book:BookInterface={} as BookInterface

constructor(private bookService:BookApiService ,private router:Router){

  this.AddBookForm = new FormGroup({
     title: new FormControl('',Validators.required),
    categoryId: new FormControl('',Validators.required),
    authorId: new FormControl('',Validators.required),
    image: new FormControl ('')
  })
}
ngOnInit(): void {
  this.bookService.getCategories().subscribe((value)=>this.categories=value)
  this.bookService.getAuthors().subscribe((value)=>this.authors=value)
}

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}


addBook(){  
  const formData = new FormData();
formData.append('title', this.AddBookForm.controls['title'].value);
formData.append('categoryId', this.AddBookForm.controls['categoryId'].value);
formData.append('authorId', this.AddBookForm.controls['authorId'].value);
if (this.selectedFile) {
  formData.append('image', this.selectedFile);
}

 this.bookService.addBook(formData).subscribe((value:any)=>{
  
  if(value.message){
    this.router.navigate(['/books'])

  }else{
    this.errorMessage="Please , Add all required input * "  

  }
})
}
}
