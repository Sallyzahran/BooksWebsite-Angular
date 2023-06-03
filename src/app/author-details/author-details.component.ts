import { UserBooksApiService } from './../services/user-books-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Author } from '../interfaces/author';
import { AuthorApiService } from '../services/author-api.service';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent {
  
  author !: Author[];
  books :any = [];
  faStar = faStar;
  statusForm!:FormGroup;
  statusBooks:Array<any>=[];
  ratingBooks:Array<any>=[];
  avgRateVariable:Array<any>=[];

  faFeatherPointed = faFeatherPointed;
  selectedAuthor : any;
  constructor (private activatedRoute: ActivatedRoute, private authorApi: AuthorApiService,private bookService:UserBooksApiService){
    this.statusForm = new FormGroup({
      status: new FormControl('')
  });
  
  }

  ngOnInit() {
    this.authorApi.getAuthorById(this.activatedRoute.snapshot.params['id']).subscribe((res: any) => this.selectedAuthor = res)

    this.authorApi.getBook(this.activatedRoute.snapshot.params['id']).subscribe((books: any) => {
      this.books = books
      for(let i=0; i <books.length;i++){
        this.bookService.getStatusOfUserBook(books[i]._id).subscribe((user:any)=>{
          this.statusBooks[i]= user.status
           this.ratingBooks[i]=user.rating
            console.log(user)
          this.bookService.getAvgRate(books[i]._id).subscribe((value:any)=> this.avgRateVariable[i]=value.avgRate);
        });
      }
    })

console.log(this.books.length)
   
  }

  changeStatus(status:string,bookId:string){
    // console.log(status,bookId)
    this.bookService.AddStatus(status,bookId).subscribe((value)=>console.log(value))
   
  }


}
