import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login-wrapper',
  templateUrl: './login-wrapper.component.html',
  styleUrls: ['./login-wrapper.component.css']
})
export class LoginWrapperComponent implements OnInit {
  loggedInUser : string;
  constructor(private mainService: MainService,private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.mainService.getCurrentUser();
    if(this.loggedInUser !== null){
      this.router.navigate(['/feed']);
    }else{
      this.router.navigate(['/login']);
    }
  }

}
