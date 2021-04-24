import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { v4 as uuidv4 } from 'uuid';
import { NewPost } from '../dto/new-post';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  allDataObs: Observable<any>;

  postData: NewPost;
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  postFormData(formData) {
    this.postData = <NewPost>formData;
    this.postData['id'] = uuidv4();
    this.postData['postedOn'] = Date.now();
    this.postData["postedBy"] = this.getCurrentUser();
    console.log(this.postData);
    this.http.post<NewPost>(this.baseUrl + '/posts', formData).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => {
        catchError(this.handleError);
      }
    );
  }

  getCurrentUser(){
    return localStorage.getItem("food-app-username");
  }

  getAllPosts() {
    this.allDataObs = this.http
      .get<NewPost>(this.baseUrl + '/posts')
      .pipe(catchError(this.handleError));
    console.log(Date.now());
    return this.allDataObs;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
