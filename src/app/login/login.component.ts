import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'uvsnr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  loginUser(): void{
    if(this.username && this.password){
      this.http.post('/user/signin', {username:this.username, password: this.password})
        .subscribe(res => {
          console.log(res);
            localStorage.setItem('token', res['token']);
            this.router.navigate(['/books']);
          }, (err) => {
            console.log(err);
          }
        );
    }else{
      console.log("enter login details");
    }
  };

  redirectToSignup(): void {
    this.router.navigate(['/signup']);
  };

}
