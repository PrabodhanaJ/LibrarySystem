import { AddBookComponent } from './book/add-book/add-book.component';
import { MemberComponent } from './member/member.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'book', component: BookComponent},
  { path: 'member', component: MemberComponent},
  { path: 'book/add-new-book', component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
