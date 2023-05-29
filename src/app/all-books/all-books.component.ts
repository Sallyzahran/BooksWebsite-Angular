import { BookInterface } from './../interfaces/book-interface';
import { BookApiService } from './../services/book-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent {
  booksList:any[]=[];
  constructor(private bookService:BookApiService){

  }
  ngOnInit() {
    this.bookService.getBooks().subscribe((value:any)=>{return this.booksList=value});
  }
}
