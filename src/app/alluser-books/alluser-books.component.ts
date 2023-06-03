import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserBooksApiService } from '../services/user-books-api.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-alluser-books',
  templateUrl: './alluser-books.component.html',
  styleUrls: ['./alluser-books.component.css']
})
export class AlluserBooksComponent {
  booksList!:any;
  statusForm!:FormGroup;
  statusBooks:Array<any>=[];
  ratingBooks:Array<any>=[];
  avgRateVariable:Array<any>=[];
  
  constructor(private bookService:UserBooksApiService , private router:Router){
    
    this.statusForm = new FormGroup({
      status: new FormControl('')
  });
                            
  }
async  ngOnInit() {
    this.bookService.allUserBook().subscribe(
    (value)=>{
      this.booksList=value
    for(let i=0; i <this.booksList.length;i++){
      this.bookService.getStatusOfUserBook(this.booksList[i]._id).subscribe((user:any)=>{
        this.statusBooks[i]= user.status
         this.ratingBooks[i]=user.rating

        this.bookService.getAvgRate(this.booksList[i]._id).subscribe((value:any)=> this.avgRateVariable[i]=value.avgRate);
      });
    }
    // console.log(this.statusBooks)
    })
  
}
  changeStatus(status:string,bookId:string){
    console.log(status,bookId)
    this.bookService.AddStatus(status,bookId).subscribe((value)=>console.log(value))
   
  }


  }




