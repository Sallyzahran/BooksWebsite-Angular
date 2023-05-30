// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }






import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminUpdateCategoryComponent } from './admin-update-category/admin-update-category.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryCardComponent,
    CategoryBooksComponent,
    AdminCategoryComponent,
    AdminAddCategoryComponent,
    AdminUpdateCategoryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



