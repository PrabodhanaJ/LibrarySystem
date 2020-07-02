import { Component, OnInit } from '@angular/core';
import { BOOKS} from '../mock-books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = BOOKS;

  constructor() { }

  ngOnInit(): void {
  }

}
