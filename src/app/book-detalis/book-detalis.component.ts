import { ActivatedRoute } from '@angular/router';
import { BookApiService } from './../services/book-api.service';
import { UserBooksApiService } from './../services/user-books-api.service';
import { BookInterface } from './../interfaces/book-interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-detalis',
  templateUrl: './book-detalis.component.html',
  styleUrls: ['./book-detalis.component.css']
})
export class BookDetalisComponent {
book!:BookInterface;
avgRateVariable!:number;

constructor(private bookservice:BookApiService,recive:ActivatedRoute){

  this.bookservice.getBook(recive.snapshot.params['id']).subscribe((value)=>this.book=value)
  this.avgRate()
}
avgRate(){
  if(this.book?.reviews?.length){
    let count:number=0;
    let sum:number=0
    for(let i =0 ;i<this.book?.reviews?.length;i++){
      if(this.book?.reviews[i].rating){
        sum+=this.book.reviews[i].rating;
        count++;
      }
    }
    this.avgRateVariable=sum/count;

  }
}
}
