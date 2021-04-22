import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NewPost } from 'src/app/dto/new-post';
import { MainService } from "../../services/main.service";
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  @Input() newPost: NewPost;
  constructor(private service: MainService) { }

  ngOnInit(): void {
    console.log(this.newPost)
  }

}
