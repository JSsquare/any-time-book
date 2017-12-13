import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookProductComponent } from './books/book-list/book-product/book-product.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { BookStartComponent } from './books/book-start/book-start.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookService } from './books/books.service';
import { DataStorageService } from './shared/data-storage.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookProductComponent,
    DropdownDirective,
    BookStartComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
