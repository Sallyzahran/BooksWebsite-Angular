import { BookDetalisComponent } from './book-detalis/book-detalis.component';
import { UserBooksStatusComponent } from './user-books-status/user-books-status.component';
import { AlluserBooksComponent } from './alluser-books/alluser-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"books",
    component:AllBooksComponent
  },
  {
    path:"addbook",
    component:AddBookComponent
  },
  {
    path:"editbook/:id",
    component:UpdateBookComponent
  },
  {
    path:"mybook/:userId",
    component:AlluserBooksComponent
  },
  {
    path:"mybook/:status/:userId",
    component:UserBooksStatusComponent
  },
  {
    path:"book-detalis/:id",
    component:BookDetalisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
