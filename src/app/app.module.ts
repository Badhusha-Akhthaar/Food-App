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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';

import { NewsFeedComponent } from './components/main-page/news-feed/news-feed.component';
import { MainService } from './services/main.service';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { NewPostComponent } from "./components/main-page/new-post/new-post.component";
import { LoginPageComponent } from './components/login-wrapper/login-page/login-page.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginWrapperComponent } from './components/login-wrapper/login-wrapper.component';
const appRoutes: Routes = [
  { path:'',component: LoginWrapperComponent },
  { path:'login',component: LoginWrapperComponent },
  { path: 'feed',component: MainPageComponent}
];
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
  MatExpansionModule,
  MatMenuModule,
  FormsModule,
  ReactiveFormsModule
  
];

@NgModule({
  declarations: [AppComponent, NewsFeedComponent, DateFormatterPipe, NewPostComponent, LoginPageComponent, MainPageComponent, LoginWrapperComponent],
  imports: [
    ...modules,RouterModule.forRoot(appRoutes)
  ],
  exports: [
    ...modules
  ],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
