import { ActivatedRoute } from '@angular/router';
import { BookApiService } from './../services/book-api.service';
import { UserBooksApiService } from './../services/user-books-api.service';
import { BookInterface } from './../interfaces/book-interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-detalis',
  templateUrl: './book-detalis.component.html',
  styleUrls: ['./book-detalis.component.css']
})
export class BookDetalisComponent {
book!:BookInterface;
rating: number | undefined;
  review: string | undefined;

constructor(private bookservice:BookApiService,private recive:ActivatedRoute,private router: Router){

  this.bookservice.getBook(recive.snapshot.params['id']).subscribe((value)=>this.book=value)
}


ngOnInit(): void {
  const bookId = this.recive.snapshot.params['id'];
  this.bookservice.getBook(bookId).subscribe(book => {
    this.book = book;
    // Check if the state contains rating and comment parameters
    const state = window.history.state;
    if (state && state.rating && state.review) {
      this.rating = state.rating;
      this.review = state.review;
    }
  });
}


addreview( id:any){

  this.router.navigate(['addreview',id])
}








}
