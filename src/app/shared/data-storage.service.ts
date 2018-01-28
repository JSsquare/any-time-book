import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {  AuthService } from '../auth/auth.service';

import { BookService } from '../books/books.service';
import { Book } from '../books/books.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataStorageService {
	constructor(private http: Http, private bookService: BookService,
				private authService: AuthService){

	}

	storeBooks(){
		const token = this.authService.getToken();		
		return this.http.put('https://ng-any-time-book.firebaseio.com/books.json?auth=' + token, this.bookService.getBooks());
	}	

	getBooks(){
		const token = this.authService.getToken();
		const booksUrl = this.authService.isAdmin() ? 
													'https://ng-any-time-book.firebaseio.com/books.json?auth=' + token 
													: 'https://ng-any-time-book.firebaseio.com/books.json?auth=' 
													+ token + '&orderBy="action"&equalTo="available"';
		this.http.get(booksUrl)
		.map(
			(response: Response) => {
				const books: Book[] = Object.values(response.json());
				console.log(books);
				return books;
			}
		)
		.subscribe(
			(books: Book[]) => {
				this.bookService.setBook(books);
			}
			);
	}

	getAllBooks(){
		const token = this.authService.getToken();
		this.http.get('https://ng-any-time-book.firebaseio.com/books.json?auth=' + token)
		.map(
			(response: Response) => {
				const books: Book[] = Object.values(response.json());
				console.log(books);
				return books;
			}
		)
		.subscribe(
			(books: Book[]) => {
				this.bookService.setBook(books);
			}
			);		
	}
}