import { EventEmitter, Injectable } from '@angular/core'
import { Book } from './books.model';

@Injectable()
export class BookService {

  bookSelected = new EventEmitter<Book>();

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
}