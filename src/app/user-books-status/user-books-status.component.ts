import { Router, ActivatedRoute } from '@angular/router';
import { UserBooksApiService } from './../services/user-books-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-books-status',
  templateUrl: './user-books-status.component.html',
  styleUrls: ['./user-books-status.component.css']
})
export class UserBooksStatusComponent {
  booksList!:any;
  statusForm!:FormGroup;
  statusBooks:Array<any>=[];
  statusparam!:string
  ratingBooks:Array<any>=[];
  avgRateVariable:Array<any>=[];

  constructor(private bookService:UserBooksApiService , private router:Router,recive:ActivatedRoute){
    this.statusForm = new FormGroup({
      status: new FormControl()
  });
  this.statusparam=recive.snapshot.params['status'];
    this.bookService.getBookByStatus(this.statusparam).subscribe(
      (value)=>{
        this.booksList=value

      for(let i=0; i <this.booksList.length;i++){
        this.bookService.getStatusOfUserBook(this.booksList[i]._id).subscribe((user:any)=>{
           this.statusBooks[i]=user.status
           this.ratingBooks[i]=user.rating
           this.bookService.getAvgRate(this.booksList[i]._id).subscribe((value:any)=> this.avgRateVariable[i]=value.avgRate);

        });
      }
      }
      )

  }

  changeStatus(status:string,bookId:string){
    this.bookService.AddStatus(status,bookId).subscribe((value)=>console.log(value))
   
  }

}
