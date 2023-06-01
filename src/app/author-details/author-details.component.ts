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
  faFeatherPointed = faFeatherPointed;
  selectedAuthor : any;
  constructor (private activatedRoute: ActivatedRoute, private authorApi: AuthorApiService){}

  ngOnInit() {
    this.authorApi.getAuthorById(this.activatedRoute.snapshot.params['id']).subscribe((res: any) => this.selectedAuthor = res)

    this.authorApi.getBook(this.activatedRoute.snapshot.params['id']).subscribe((res: any) => this.books = res)
  }


}
