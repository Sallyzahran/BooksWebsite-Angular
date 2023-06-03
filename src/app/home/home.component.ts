import { Component } from '@angular/core';
import { BookApiService } from './../services/book-api.service';
import { BookInterface } from './../interfaces/book-interface';
import { Author } from '../interfaces/author';
import { AuthorApiService } from '../services/author-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bookList!:BookInterface[];
  authorList!: Author[];

constructor(private bookService:BookApiService,private authorApiService: AuthorApiService) {
  this.bookService.getBooks().subscribe(value=>this.bookList=value.slice(0, 4))  
  this.authorApiService.getAllAuthors().subscribe(value => this.authorList = Object.values(value).slice(0, 4));
}

}
