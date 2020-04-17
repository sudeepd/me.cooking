import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }
  userName : string;
  password : string;
  message: string = "";

  ngOnInit(): void {
  }

  loginWithGoogle() {
    this.authService.signInWithGoogle()
  }

  setMessage(m) {
    this.message = m;
  }

  loginWithPassword() {
    this.router.navigate(['/home']);
    // let message = this.message;
    // this.authService.signInWithPassword(this.userName, this.password).catch((error) => this.setMessage("Login Failed"));
  }

}
