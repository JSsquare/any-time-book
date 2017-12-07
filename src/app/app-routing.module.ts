import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BookStartComponent } from './books/book-start/book-start.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent, children: [
   { path: '', component: BookStartComponent },
   { path: ':id', component: BookDetailComponent}
  ] }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule] 
})

export class AppRoutingModule {

}