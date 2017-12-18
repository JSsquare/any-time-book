import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from '../books.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';

import { Book } from '../books.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  editMode =  false;
  bookForm: FormGroup;


  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
  	this.route.params
  	.subscribe(
  		(params: Params) => {
  			this.id = +params['id'];
  			this.editMode =  params['id'] != null;
        this.initForm();
  		}
  		)
  }

  onSubmit(){
    if(this.editMode){
      this.bookService.updateBook(this.id, this.bookForm.value);
    } else {
      this.bookService.addBook(this.bookForm.value);
    }

    this.dataStorageService.storeBooks()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );    


    this.onCancel();    
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  private initForm() {
    let bookTitle = '';
    let bookImagePath = '';
    let bookISBN = '';
    let bookAuthor = '';

    if(this.editMode){
      const book = this.bookService.getBook(this.id);
      bookTitle = book.title;
      bookImagePath = book.imagePath;
      bookISBN = book.isbn;
      bookAuthor = book.author;
    }

    this.bookForm = new FormGroup({
      'title' : new FormControl(bookTitle, Validators.required),
      'imagePath': new FormControl(bookImagePath),
      'author': new FormControl(bookAuthor),
      'isbn': new FormControl(bookISBN, Validators.required)
    });
  }

}
