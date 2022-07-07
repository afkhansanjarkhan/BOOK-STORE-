import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private crudApi: CrudService) { }
  Books:any = [];
  ngOnInit(): void {
    this.crudApi.getBooks().subscribe(res=>{
      console.log(res);
      this.Books = res;
    })
  }
  delete(id:any,i:any){
    if(window.confirm("Are you sure, You want to delete the book")){
      this.crudApi.deleteBook(id).subscribe(res=>{
        this.Books.splice(i,1);
      })
    }
  }
}
