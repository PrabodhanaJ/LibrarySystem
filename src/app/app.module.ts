import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { MemberComponent } from './member/member.component';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    MemberComponent,
    BookSearchComponent,
    AddBookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
