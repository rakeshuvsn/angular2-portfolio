import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'uvsnr-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book',{headers: this.getHeaders()}).subscribe(data => {
      this.books = data;
    });
  }

  getHeaders(): any {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization', token);
    return headers;
  }

}
