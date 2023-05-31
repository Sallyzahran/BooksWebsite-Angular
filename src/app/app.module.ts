import { FormGroup } from '@angular/forms';
import { BookApiService } from './services/book-api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AlluserBooksComponent } from './alluser-books/alluser-books.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    AddBookComponent,
    UpdateBookComponent,
    AlluserBooksComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
     FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    BookApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
