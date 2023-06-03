import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorApiService } from '../services/author-api.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {
  message!:any;
  addForm: FormGroup;
  selectedFile?: File;

  constructor (private fb : FormBuilder, private router : Router, private authorApi : AuthorApiService) {
    this.addForm = this.fb.group({
      image: [''],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_ ]*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_ ]*$/)]],
      dateOfBirth: [''],
    });
  }

  onFileSelected(event: any) {
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];
  }

  addAuthor() {
    const formData = new FormData();
      formData.append('firstName', this.addForm.controls['firstName'].value);
      formData.append('lastName', this.addForm.controls['lastName'].value);
      formData.append('dateOfBirth', this.addForm.controls['dateOfBirth'].value);

      if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    this.authorApi.addAuthor(formData).subscribe((value)=>this.message=value)
    this.router.navigate(['/author-admin'])

    }
}
