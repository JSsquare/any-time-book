import { Component, OnInit } from '@angular/core';
import { Book } from './books.model';
import { BookService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {
  selectedBook: Book;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.bookSelected
      .subscribe(
        (book: Book) => {
          this.selectedBook = book;
        }
      );  	
  }

}
