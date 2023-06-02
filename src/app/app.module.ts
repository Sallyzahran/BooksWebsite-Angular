import { FormGroup } from '@angular/forms';
import { BookApiService } from './services/book-api.service';
import { AllBooksComponent } from './all-books/all-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AlluserBooksComponent } from './alluser-books/alluser-books.component';
import { UserBooksStatusComponent } from './user-books-status/user-books-status.component';
import { BookDetalisComponent } from './book-detalis/book-detalis.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { AdminUpdateCategoryComponent } from './admin-update-category/admin-update-category.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { StarRatingPipe } from './star-rating.pipe';
import { AuthorListComponent } from './author-list/author-list.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthorAdminComponent } from './author-admin/author-admin.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AuthorApiService } from './services/author-api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    AddBookComponent,
    UpdateBookComponent,
    AlluserBooksComponent,
    UserBooksStatusComponent,
    BookDetalisComponent, 
    CategoryComponent,
    CategoryCardComponent,
    CategoryBooksComponent,
    AdminCategoryComponent,
    AdminAddCategoryComponent,
    AdminUpdateCategoryComponent,
    AddreviewComponent,
    StarRatingPipe,
    AuthorListComponent,
    AuthorAdminComponent,
    AuthorDetailsComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotFoundComponent,
    SidebarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    ReactiveFormsModule,
  ],
  providers: [
    BookApiService,
    AuthorApiService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


