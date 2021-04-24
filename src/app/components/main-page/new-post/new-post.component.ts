import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

import {MatAccordion} from '@angular/material/expansion';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  isRecurring : Boolean = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Output() postCreated = new EventEmitter<{}>();

  newPostForm = new FormGroup({
    //Common Fields
    postType: new FormControl(''),
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
  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
  checkIfRecurrs(event: Event){
    this.isRecurring = ( this.isRecurring === true) ? false : true;
    console.log((<HTMLInputElement>event.target).value);
  }
  onSubmitNewPost(formData: NgForm){
    this.mainService.postFormData(formData.value);
    this.postCreated.emit();
    // this.accordion.closeAll();
  }
}
