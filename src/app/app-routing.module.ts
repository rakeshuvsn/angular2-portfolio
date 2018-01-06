import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
    {
      path: 'books',
      component: BookComponent,
      data: { title: 'Book List' }
    },
    {
      path: 'book-details/:id',
      component: BookDetailComponent,
      data: { title: 'Book Details' }
    },
    {
      path: 'book-create',
      component: BookCreateComponent,
      data: { title: 'Create Book' }
    },
    {
      path: 'book-edit/:id',
      component: BookEditComponent,
      data: { title: 'Edit Book' }
    },
    { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent,
      data: { title: 'Login page' }
    },
    {
      path: 'signup',
      component: SignupComponent,
      data: { title: 'Signup page' }
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
