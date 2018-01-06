import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'uvsnr-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  };

  registerUser(): void {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    console.log(user);
    if(this.confirmPassword && user && user.password === this.confirmPassword ){

        this.http.post('/user/register', user)
          .subscribe(res => {
              this.router.navigate(['/login']);
            }, (err) => {
              console.log(err);
            }
          );
    }else{
      console.log('enter details');
    }

  };
}
