import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserBooksApiService } from '../services/user-books-api.service';

@Component({
  selector: 'app-alluser-books',
  templateUrl: './alluser-books.component.html',
  styleUrls: ['./alluser-books.component.css']
})
export class AlluserBooksComponent {
  booksList!:any;
  constructor(private bookService:UserBooksApiService , private router:Router){
    this.bookService.allUserBook("6470a42e6b2d1b0e0a2a85c0").subscribe((value)=>this.booksList=value)
  }

}
