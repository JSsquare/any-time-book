import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookProductComponent } from './books/book-list/book-product/book-product.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { BookStartComponent } from './books/book-start/book-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookProductComponent,
    DropdownDirective,
    BookStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
