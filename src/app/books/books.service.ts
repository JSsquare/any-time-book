import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';

import { Book } from './books.model';



@Injectable()
export class BookService {

  bookChanged = new Subject<Book[]>();



  private books: Book[] = [
  	new Book('Test Book', 'Testing', 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/business_bookcover.png', 'ISBN-SAMPLE'),
  	new Book('Test Book 2', 'Testing 2', 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/business_bookcover.png', 'ISBN-SAMPLE 2')
  ];

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