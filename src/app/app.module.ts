import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from "@angular/material/dialog";
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from "@angular/material/form-field";

import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MainService } from './services/main.service';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';

const modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTabsModule,
  MatDialogModule,
  MatStepperModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule 
];

@NgModule({
  declarations: [AppComponent, NewsFeedComponent, CreatePostComponent, DateFormatterPipe],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
