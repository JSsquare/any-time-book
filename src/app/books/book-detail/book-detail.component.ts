import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Book } from '../books.model';
import { BookService } from '../books.service';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;
  constructor(private bookService: BookService,
  	private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService,    
    private authService: AuthService) { 
  }

  ngOnInit() {
  	this.route.params
  	.subscribe(
  		(params: Params) => {
  			this.id = +params['id'];
  			this.book = this.bookService.getBook(this.id);
  		});    
  }

  onEditBook(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteBook(){
    this.bookService.deleteBook(this.id);
    this.router.navigate(['/books']);
    this.dataStorageService.storeBooks()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );      
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
