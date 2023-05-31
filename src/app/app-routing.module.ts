// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }






import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { CategoryComponent } from './category/category.component';
import { AdminUpdateCategoryComponent } from './admin-update-category/admin-update-category.component';

const routes: Routes = [

 {


  path:"",
  component : AdminCategoryComponent
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
