import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthorAdminComponent } from './author-admin/author-admin.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthorApiService } from './services/author-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorAdminComponent,
    AuthorDetailsComponent,
    NotFoundComponent,
    AddAuthorComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthorApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
