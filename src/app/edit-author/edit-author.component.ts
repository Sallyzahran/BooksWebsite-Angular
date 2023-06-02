import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorApiService } from '../services/author-api.service';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../interfaces/author';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent {
  message!:any;
  updateForm: FormGroup;
  selectedFile?: File;

  selectedAuthor : any;
  constructor (private fb : FormBuilder, private router : Router, private authorApi : AuthorApiService,private activatedRoute: ActivatedRoute) {
    this.updateForm = this.fb.group({
      image: [''],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_ ]*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_ ]*$/)]],
      dateOfBirth: [''],
    });
  }

  ngOnInit() {
    this.authorApi.getAuthorById(this.activatedRoute.snapshot.params['id']).subscribe((res: any) => this.selectedAuthor = res)
  }

  onFileSelected(event: any) {
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];
  }
  
  updateAuthor() {
    const formData = new FormData();
      formData.append('firstName', this.updateForm.controls['firstName'].value);
      formData.append('lastName', this.updateForm.controls['lastName'].value);
      formData.append('dateOfBirth', this.updateForm.controls['dateOfBirth'].value);

      if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    this.authorApi.updateAuthor(this.activatedRoute.snapshot.params['id'], formData).subscribe((value)=>this.message=value)
    // this.router.navigate(['author-admin'])
    }
}
