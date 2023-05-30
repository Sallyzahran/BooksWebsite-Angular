import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorAdminComponent } from './author-admin/author-admin.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

const routes: Routes = [
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
    path: "**",
    component: NotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
