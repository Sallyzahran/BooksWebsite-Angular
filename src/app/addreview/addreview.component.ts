import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookApiService } from '../services/book-api.service';
import { BookInterface } from '../interfaces/book-interface';
@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent {

  rating!: number 
  review: string = '';
  book! :BookInterface

  constructor(private bookService: BookApiService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit():void{

    this.submitReview()

  }

 

  submitReview() {
    const bookId = this.route.snapshot.params['id'];
    const reviewData = {
      rating: this.rating,
      review: this.review
    };

    
    this.bookService.addReview(bookId, reviewData)
      .subscribe(() => {
        this.router.navigate(['/book-details', bookId], { state: { rating: this.rating, review: this.review } });
      });
  }




  // submitReview() {
  //   const bookId = this.route.snapshot.params['id'];
  //   const existingRating = this.book?.reviews?.find(r => r.review !== undefined);

  //   if (existingRating) {
  //     const reviewData = {
  //       review: existingRating.review,
  //       rating: this.rating
  //     };
  //     this.bookService.addReview(bookId, reviewData)
  //       .subscribe(() => {
  //         this.router.navigate(['/book-details', bookId], { state: { rating: this.rating, review: existingRating.review,} });
  //       });
  //   } else {
  //     const reviewData = {
  //       rating: this.rating,
  //       review: this.review
  //     };
  //     this.bookService.addReview(bookId, reviewData)
  //       .subscribe(() => {
  //         this.router.navigate(['/book-details', bookId], { state: { rating: this.rating, review: this.review } });
  //       });
  //   }
  // }




















  

  }


