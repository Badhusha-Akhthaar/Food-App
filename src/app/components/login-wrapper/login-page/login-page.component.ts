import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loggedInUser : string;
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.loggedInUser =  localStorage.getItem("food-app-username");
    // console.log(this.loggedInUser);
    // if(this.loggedInUser !== null){
    //   //Route to different page
    //   console.log("User already LoggedIn"+this.loggedInUser);
    // }
  }
  onLogin(loginData: NgForm){
    //Need to call service later
    // console.log(loginData.value);
    localStorage.setItem("food-app-username",loginData.value.userName);
    this.router.navigate(['/feed']);
  }

}
