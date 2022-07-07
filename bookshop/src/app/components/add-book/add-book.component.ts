import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm !:FormGroup;
  constructor(private formBuilder:FormBuilder,private router: Router,private ngZone:NgZone, private crudApi:CrudService) { 
    this.bookForm = this.formBuilder.group({
      name :[''],
      price : [''],
      description :['']
    })
  }

  ngOnInit(): void {
  }
  onSubmit():any{
    this.crudApi.addBook(this.bookForm.value).subscribe((res:any)=>{
      console.log("Book added successfully");
      this.ngZone.run(()=>{
        this.router.navigateByUrl('/books-list');
      },(err:any)=>{
        console.log(err);
      })
    })
  }
  

}
