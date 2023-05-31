import { Router } from '@angular/router';
import { BookInterface } from './../interfaces/book-interface';
import { BookApiService } from './../services/book-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent {
  booksList!:any;
  constructor(private bookService:BookApiService , private router:Router){

  }
  ngOnInit() {
    this.bookService.getBooks().subscribe((value)=>this.booksList=value);
  }
  EditPage(id:string){
    this.router.navigate(['editbook',id]);

  }

  deleteBook(id:string){
    this.bookService.deleteBook(id).subscribe((value)=>{
    
    });
   this.booksList= this.booksList.filter((deletebook:BookInterface)=>{
    return deletebook._id != id
    })
   
}}
