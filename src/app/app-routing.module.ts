import { BookDetalisComponent } from './book-detalis/book-detalis.component';
import { UserBooksStatusComponent } from './user-books-status/user-books-status.component';
import { AlluserBooksComponent } from './alluser-books/alluser-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { CategoryComponent } from './category/category.component';
import { AdminUpdateCategoryComponent } from './admin-update-category/admin-update-category.component';






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
  },
  
   {
    path:"allcategories",
    component : CategoryComponent
   },
   
  {
    path : "app-category-books/:id",
    component: CategoryBooksComponent
  
   },
   
   {
    path:"addCategory",
    component :AdminAddCategoryComponent,
   },
  
   {
    path: "AdminCategory",
    component : AdminCategoryComponent
   },
  
   {
    path : "updateCategory/:id",
    component : AdminUpdateCategoryComponent
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
