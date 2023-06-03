import { ActivatedRoute } from '@angular/router';
import { BookApiService } from './../services/book-api.service';
import { UserBooksApiService } from './../services/user-books-api.service';
import { BookInterface } from './../interfaces/book-interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-detalis',
  templateUrl: './book-detalis.component.html',
  styleUrls: ['./book-detalis.component.css']
})

export class BookDetalisComponent {
  statusForm!:FormGroup;
book!:BookInterface;
avgRateVariable!:number;
rating: number | undefined;
  review: string | undefined;
  status1!:any

constructor(private bookservice:BookApiService,private recive:ActivatedRoute,private router: Router,private bookService:UserBooksApiService){
  this.statusForm = new FormGroup({
    status: new FormControl('')
});
    
  this.bookservice.getBook(recive.snapshot.params['id']).subscribe((book)=>{
    this.bookService.getStatusOfUserBook(book._id).subscribe((user:any)=>{
      this.status1= user.status
  
      this.bookService.getAvgRate(book._id).subscribe((value:any)=> this.avgRateVariable=value.avgRate);
    });
  })
  // this.avgRate()
  
}
// avgRate(){
//   if(this.book?.reviews?.length){
//     let count:number=0;
//     let sum:number=0
//     for(let i =0 ;i<this.book?.reviews?.length;i++){
//       if(this.book?.reviews[i].rating){
//         sum+=this.book.reviews[i].rating;
//         count++;
//       }
//     }
//     this.avgRateVariable=sum/count;

//   }
// }


ngOnInit(): void {
  const bookId = this.recive.snapshot.params['id'];
  this.bookservice.getBook(bookId).subscribe(book => {
    this.book = book;
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

changeStatus(status:string,id:string){
  this.bookService.AddStatus(status,id).subscribe((value)=>console.log(value))

}






}






















