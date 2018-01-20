import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';

import { Book } from './books.model';



@Injectable()
export class BookService {
  bookChanged = new Subject<Book[]>();

  private books: Book[] = [];


  setBook(books: Book[]){
    this.books = books;
    this.bookChanged.next(this.books.slice());
  }

  getBooks(){
  	return this.books.slice();
  }

  getBook(index: number){
  	return this.books[index];
  }

  addBook(book: Book){
    this.books.push(book);
    this.bookChanged.next(this.books.slice());
  }

  updateBook(index: number, newBook: Book){
    console.log(this.books);
    this.books[index] = newBook;
    this.bookChanged.next(this.books.slice());    
  }



  deleteBook(index: number){
    this.books.splice(index, 1);
    this.bookChanged.next(this.books.slice());
  }

  

}