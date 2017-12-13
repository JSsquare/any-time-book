import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../books.model';
import { BookService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.bookService.bookChanged
    .subscribe(
      (books: Book[]) => {
        this.books = books;
      }
      );
  	this.books = this.bookService.getBooks();    
  }

  onNewBook(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
