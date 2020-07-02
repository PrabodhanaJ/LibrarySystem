import { Book } from './../book';
import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock-books';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  books = BOOKS;
  selectedBook: Book;
  
  ngOnInit(): void {
  }

  onSelect(book:Book): void{
    this.selectedBook = book;
  }

}
