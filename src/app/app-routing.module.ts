import { UserBooksComponent } from './user-books/user-books.component';
import { HomeComponent } from './home/home.component';
import { BookDetalisComponent } from './book-detalis/book-detalis.component';
import { UserBooksStatusComponent } from './user-books-status/user-books-status.component';
import { AlluserBooksComponent } from './alluser-books/alluser-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { Component, NgModule } from '@angular/core';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { CategoryComponent } from './category/category.component';
import { AdminUpdateCategoryComponent } from './admin-update-category/admin-update-category.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorAdminComponent } from './author-admin/author-admin.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:"books",
    component:AllBooksComponent
  },
  {
    path:"book-list",
    component:UserBooksComponent
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
    path:"mybook",
    component:AlluserBooksComponent
  },
  {
    path:"mybook/:status",
    component:UserBooksStatusComponent
  },
  {
    path:"book-details/:id",
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
   {
    path : "addreview/:id",
    component : AddreviewComponent
   },
  
  {
    path: "author-list",
    component: AuthorListComponent
  },
  {
    // path: "author-details",
    path: "author-details/:id",
    component: AuthorDetailsComponent
  },
  {
    path: "author-admin",
    component: AuthorAdminComponent
  },
  {
    path: "add-author",
    component: AddAuthorComponent
  },
  {
    path: "edit-author/:id",
    component: EditAuthorComponent
  },

   {
   path : "login",
   component : LoginComponent
 
  },
  {
    path : "register",
    component : RegisterComponent
  
   },
  {
    path : "",
    component : HomeComponent
  
   },
   {
    path : "**",
    component : NotFoundComponent
   
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
