import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../books.model';

@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrls: ['./book-product.component.css']
})
export class BookProductComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;  
  

  
  ngOnInit() {
  }

}
