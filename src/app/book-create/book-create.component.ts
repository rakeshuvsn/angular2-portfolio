import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'uvsnr-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  book = {};
  constructor(private http: HttpClient, private router: Router, private headers: HttpHeaders) { }

  ngOnInit() {
  }
  saveBook() {
    this.http.post('/book', this.book, {headers: this.getHeaders()})
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  getHeaders(): any {
    let token = localStorage.getItem('token');
    this.headers.append('Authorization', token);
    return this.headers;
  }
}
