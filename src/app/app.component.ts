import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { MatDialog } from "@angular/material/dialog";

import { CreatePostComponent } from "./components/create-post/create-post.component";
import { NewPost } from "./dto/new-post";
import { MainService } from "./services/main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MainService]
})
export class AppComponent implements OnInit {
  title = 'FoodApp';
  breakpoint: number;
  allPosts: NewPost[] = [];
  constructor(public dialog : MatDialog,private mainService: MainService){

  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 12;
    this.mainService.getAllPosts()
    .subscribe((result)=>{
      console.log(result);
      this.allPosts = result;
    });
  }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 12;
  }

  openDialog(){
    const dialogRef = this.dialog.open(CreatePostComponent);
    dialogRef.afterClosed().subscribe((result)=>{
      console.log("Closed");
    });
  }
}
