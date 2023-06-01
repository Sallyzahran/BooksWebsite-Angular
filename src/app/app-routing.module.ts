import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path : "",
    component : SidebarComponent
  
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
    path : "**",
    component : NotFoundComponent
   
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
