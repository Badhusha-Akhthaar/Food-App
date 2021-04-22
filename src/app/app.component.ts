import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { MatDialog } from "@angular/material/dialog";

import { CreatePostComponent } from "./components/create-post/create-post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FoodApp';
  breakpoint: number;
  constructor(public dialog : MatDialog){

  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 12;
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
