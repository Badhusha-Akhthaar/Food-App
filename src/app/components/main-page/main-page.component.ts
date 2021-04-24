import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewPost } from 'src/app/dto/new-post';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [MainService]
})
export class MainPageComponent implements OnInit {
  title = 'FoodApp';
  breakpoint: number;
  allPosts: NewPost[] = [];
  loggedInUser: string;
  constructor(public dialog : MatDialog,private mainService: MainService,private router: Router) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 12;
    this.mainService.getAllPosts()
    .subscribe((result)=>{
      console.log(result);
      this.allPosts = result;
    });
    this.loggedInUser = this.mainService.getCurrentUser();
    if(this.loggedInUser !== null){
      this.router.navigate(['/feed']);
    }else{
      this.router.navigate(['/login']);
    }


  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 12;
  }
  onPostCreated(){
    console.log("Post Created");
  }

  onLogout(){
    localStorage.removeItem("food-app-username");
  }

}
