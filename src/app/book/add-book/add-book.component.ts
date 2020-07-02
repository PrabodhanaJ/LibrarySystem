import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor() { }

  book_name = new FormControl();
  author = new FormControl();


  save(){
    alert(this.book_name.value);
  }
  
  ngOnInit(): void {
  }

}
