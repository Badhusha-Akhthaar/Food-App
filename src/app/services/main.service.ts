import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { v4 as uuidv4 } from "uuid";
import { NewPost } from "../dto/new-post";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  allDataObs: Observable<any>;

  postData: NewPost;
  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  postFormData(formData){
    this.postData = <NewPost>formData;
    this.postData["id"] = uuidv4();
    this,this.postData["postedOn"] = Date.now();
    console.log(this.postData);
    this.http.post<NewPost>(this.baseUrl+'/posts',formData).subscribe((result)=>{
      console.log(result);
    }); 
  }

  getAllPosts(){
    this.allDataObs = this.http.get<NewPost>(this.baseUrl+'/posts');
    console.log(Date.now());
    return this.allDataObs;
  }
}
