import { BookApiService } from './../services/book-api.service';
import { BookInterface } from './../interfaces/book-interface';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent {
bookList!:BookInterface[];
constructor(private bookService:BookApiService) {
  this.bookService.getBooks().subscribe(value=>this.bookList=value)  
}
}
