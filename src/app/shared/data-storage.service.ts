import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { BookService } from '../books/books.service';
import { Book } from '../books/books.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataStorageService {
	constructor(private http: Http, private bookService: BookService){

	}

	storeBooks(){
		return this.http.put('https://ng-any-time-book.firebaseio.com/books.json', this.bookService.getBooks());
	}

	getBooks(){
		this.http.get('https://ng-any-time-book.firebaseio.com/books.json')
		.map(
			(response: Response) => {
				const books: Book[] = response.json();
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