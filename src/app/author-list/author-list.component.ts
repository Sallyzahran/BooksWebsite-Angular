import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../interfaces/author';
import { AuthorApiService } from '../services/author-api.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  author !: Author[];

  constructor(private router: Router, private authorApiService: AuthorApiService){
  }

  ngOnInit(){
    this.authorApiService.getAllAuthors().subscribe((res : any) => this.author =res )
    // console.log(this.author);
  }

  displayDetails(id: number) {
    console.log(id);
    this.router.navigate(['author-details', id])
  }
}