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
  constructor(private bookService:UserBooksApiService , private router:Router,recive:ActivatedRoute){
    this.statusForm = new FormGroup({
      status: new FormControl()
  });
  this.statusparam=recive.snapshot.params['status'];
    this.bookService.getBookByStatus("6470a42e6b2d1b0e0a2a85c0",this.statusparam).subscribe(
      (value)=>{
        this.booksList=value

      for(let i=0; i <this.booksList.length;i++){
        this.bookService.getStatusOfUserBook('6470a42e6b2d1b0e0a2a85c0',this.booksList[i]._id).subscribe((value:any)=>{
           this.statusBooks[i]= value.status
        });
      }
      }
      )

  }

  changeStatus(status:string,bookId:string){
    this.bookService.AddStatus(status,'6470a42e6b2d1b0e0a2a85c0',bookId).subscribe((value)=>console.log(value))
   
  }

}