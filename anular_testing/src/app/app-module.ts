import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { App } from './app';
import { NavBar } from './Basic/nav-bar/nav-bar';
import { Footer } from './Basic/footer/footer';
import { AllPosts } from './Basic/all-posts/all-posts';
import { PostDetails } from './Basic/post-details/post-details';
import { EditPost } from './Basic/edit-post/edit-post';
import { routes } from './app-routing-module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    CommonModule,
  
    App,
    NavBar,
    Footer,
    AllPosts,
    PostDetails,
    EditPost
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
