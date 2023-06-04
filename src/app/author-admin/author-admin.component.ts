import { Component } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Author } from '../interfaces/author';
import { AuthorApiService } from '../services/author-api.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-author-admin',
  templateUrl: './author-admin.component.html',
  styleUrls: ['./author-admin.component.css']
})

export class AuthorAdminComponent {
  faUserPlus = faUserPlus;
  faPen = faPen;
  faTrashCan = faTrashCan;

  author !: Author[];

  constructor(private router: Router, private authorApiService: AuthorApiService){}

  ngOnInit(){
    this.authorApiService.getAllAuthors().subscribe((res : any) => this.author =res )
    // console.log(this.author);
  }

  onDelete(authorId : any){
    this.authorApiService.deleteAuthor(authorId).subscribe((res:any)=> {
      if (res && res.message == "There's is abook related to this author, you can't delete this author") {
        console.log(res)
        Swal.fire({
          icon: 'error',
          title: 'Unable to delete author',
          text: 'There are books associated with this author',
          confirmButtonText: 'OK'
        });
      }else {
      this.author = this.author.filter(auth => auth._id !== authorId)
    }
  });
}




  editDetails(id: number) {
    console.log(id);
    this.router.navigate(['edit-author', id])
  }
}
