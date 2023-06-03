import { notGuestGuard } from './Guards/not-guest.guard';
import { isAdminGuard } from './Guards/is-admin.guard';
import { authGuardGuard } from './Guards/auth-guard.guard';
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
    component:AllBooksComponent,
    canActivate: [authGuardGuard,isAdminGuard] 

  },
  {
    path:"book-list",
    component:UserBooksComponent,
    canActivate: [authGuardGuard]  

  },
  {
    path:"addbook",
    component:AddBookComponent,
    canActivate: [authGuardGuard,isAdminGuard] 

  },
  {
    path:"editbook/:id",
    component:UpdateBookComponent,
    canActivate: [authGuardGuard,isAdminGuard] 

  },
  {
    path:"mybook",
    component:AlluserBooksComponent,
    canActivate: [authGuardGuard]  

  },
  {
    path:"mybook/:status",
    component:UserBooksStatusComponent
    ,    canActivate: [authGuardGuard]  

  },
  {
    path:"book-details/:id",
    component:BookDetalisComponent,
    canActivate: [authGuardGuard]  

  },
  
   {
    path:"allcategories",
    component : CategoryComponent,
    canActivate: [authGuardGuard]  


   },
   
  {
    path : "app-category-books/:id",
    component: CategoryBooksComponent,
    canActivate: [authGuardGuard]  

  
   },
   
   {
    path:"addCategory",
    component :AdminAddCategoryComponent,
    canActivate: [authGuardGuard,isAdminGuard] 

   },
  
   {
    path: "AdminCategory",
    component : AdminCategoryComponent,
    canActivate: [authGuardGuard,isAdminGuard] 

   },
  
   {
    path : "updateCategory/:id",
    component : AdminUpdateCategoryComponent,
    canActivate: [authGuardGuard,isAdminGuard]  

   },
   {
    path : "addreview/:id",
    component : AddreviewComponent,
    canActivate: [authGuardGuard]  

   },
  
  {
    path: "author-list",
    component: AuthorListComponent,
    canActivate: [authGuardGuard]  

  },
  {
    // path: "author-details",
    path: "author-details/:id",
    component: AuthorDetailsComponent,
    canActivate: [authGuardGuard]  

  },
  {
    path: "author-admin",
    component: AuthorAdminComponent,
    canActivate: [authGuardGuard,isAdminGuard] 

  },
  {
    path: "add-author",
    component: AddAuthorComponent,
    canActivate: [authGuardGuard,isAdminGuard] 

  },
  {
    path: "edit-author/:id",
    component: EditAuthorComponent,
    canActivate: [authGuardGuard,isAdminGuard]  

  },

   {
   path : "login",
   component : LoginComponent,
   canActivate: [notGuestGuard]
 
  },
  {
    path : "register",
    component : RegisterComponent,
    canActivate: [notGuestGuard]

  
   },
  {
    path : "",
    component : HomeComponent,
    canActivate: [authGuardGuard]  

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
