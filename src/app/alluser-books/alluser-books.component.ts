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

      for(let i=0; i <this.booksList.length;i++){
        this.bookService.getStatusOfUserBook('6470a42e6b2d1b0e0a2a85c0',this.booksList[i]._id).subscribe((value:any)=>{
           this.statusBooks[i]= value.status
        });
      }
                            
  }
async  ngOnInit() {
    this.bookService.allUserBook("6470a42e6b2d1b0e0a2a85c0").subscribe(
    (value)=>{
      this.booksList=value
    for(let i=0; i <this.booksList.length;i++){
      this.bookService.getStatusOfUserBook('6470a42e6b2d1b0e0a2a85c0',this.booksList[i]._id).subscribe((user:any)=>{
        // this.statusBooks[i]= user.status
         this.ratingBooks[i]=user.rating
         this.statusForm?.get('status')?.setValue(user.status);

        this.bookService.getAvgRate(this.booksList[i]._id).subscribe((value:any)=> this.avgRateVariable[i]=value.avgRate);
      });
    }
    console.log(this.statusBooks)
    })
  
}
  changeStatus(status:string,bookId:string){
    console.log(status,bookId)
    this.bookService.AddStatus(status,'6470a42e6b2d1b0e0a2a85c0',bookId).subscribe((value)=>console.log(value))
   
  }

  // avgRate(book:any){
  //   // if(book?.reviews?.length){
  //   //   let count:number=0;
  //   //   let sum:number=0
  //   //   for(let i =0 ;i<book?.reviews?.length;i++){
  //   //     if(book?.reviews[i].rating){
  //   //       sum+=book.reviews[i].rating;
  //   //       count++;
  //   //     }
  //   //     this.avgRateVariable[i]=sum/count;

  //   //   }
  
  //   // }
  //   for(let i  =0 ;i <this.booksList.length;i++){
      
  //   }
  // }
  }




