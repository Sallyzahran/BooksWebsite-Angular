import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookApiService } from '../services/book-api.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent {

  rating: number = 0;
  review: string = '';

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


  }


