import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase';
import { Book } from '../books.model';
import { BookService } from '../books.service';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';

import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private dataStorageService: DataStorageService) { 

  }

  ngOnInit() {
    this.bookService.bookChanged
    .subscribe(
      (books: Book[]) => {
        this.books = books;
      }
      );
  	//this.books = this.bookService.getBooks();
    this.books = this.dataStorageService.getBooks();
  }

  onNewBook(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  isAdminCheck(){
    if(this.authService.isAuthenticated()){
      return this.authService.isAdmin();  
    }
    else{
      return false;
    }
    
  }

}
