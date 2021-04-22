import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl, NgForm} from '@angular/forms';

import { MainService } from "../../services/main.service";
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  isRecurring : Boolean = false;
  newPostForm = new FormGroup({
    //Common Fields
    postType: new FormControl(''),
    postTitle: new FormControl(''),
    postDescription: new FormControl(''),
    foodType: new FormControl(''),
    servings: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
    providingDate: new FormControl(''),
    place: new FormControl(''),
    //Recurring Specific
    recurrs: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
  });


  constructor(public mainService: MainService) {}

  ngOnInit() {
  }

  checkIfRecurrs(event: Event){
    this.isRecurring = ( this.isRecurring === true) ? false : true;
    console.log((<HTMLInputElement>event.target).value);
  }
  onSubmitNewPost(formData: NgForm){
    this.mainService.postFormData(formData.value);
  }
}
