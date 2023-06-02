import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Author } from '../interfaces/author';
import { AuthorApiService } from '../services/author-api.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent {
  author !: Author[];
  faStar = faStar;

  selectedAuthor : any;
  constructor (private activatedRoute: ActivatedRoute, private authorApi: AuthorApiService){}

  ngOnInit() {
    this.authorApi.getAuthorById(this.activatedRoute.snapshot.params['id']).subscribe((res: any) => this.selectedAuthor = res)
  }
}
