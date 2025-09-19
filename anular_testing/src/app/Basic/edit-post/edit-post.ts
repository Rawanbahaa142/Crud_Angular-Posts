import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-post.html',
  styleUrls: ['./edit-post.css']
})
export class EditPost implements OnInit {
  post: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.post = posts.find((p: any) => p.id === id);
  }

  updatePost(post: any) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const index = posts.findIndex((p: any) => p.id === post.id);
    if (index !== -1) {
      posts[index] = post;
      localStorage.setItem('posts', JSON.stringify(posts));
    }
    this.router.navigate(['/']); 
  }
  saveChanges() {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const index = posts.findIndex((p: any) => p.id === this.post.id);
    if (index !== -1) {
      posts[index] = this.post;
      localStorage.setItem('posts', JSON.stringify(posts));
    }
    this.router.navigate(['/']);
  }
}
