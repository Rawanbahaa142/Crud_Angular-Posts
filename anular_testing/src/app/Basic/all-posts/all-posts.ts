import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './all-posts.html',
  styleUrls: ['./all-posts.css']
})
export class AllPosts {
  post = { id: 0, title: '', body: '' };
  posts: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const savePost = localStorage.getItem('posts');
    if (savePost) {
      this.posts = JSON.parse(savePost);
    }
  }

  addPost() {
    this.posts.push({ ...this.post });
    localStorage.setItem('posts', JSON.stringify(this.posts));
    this.post = { id: 0, title: '', body: '' }; // reset
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post: any) => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }
}
