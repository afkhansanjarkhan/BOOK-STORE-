import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  {
  path:'', redirectTo:'add-book',pathMatch:'full'
  },
  {
    path:'add-book',component:AddBookComponent
  },
  {
    path:'books-list', component:BookListComponent
  },
  {
    path:'edit-book/:id',component:BookDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
