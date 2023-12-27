import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../service/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  categories = [];
  posts = [];

  constructor(private blogService:BlogService) {
  }

  ngOnInit(): void {
    this.categories = this.blogService.getCategories();
    var posts = this.blogService.getPosts(null);
    this.posts = posts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    console.log('posts', this.posts);
  }

}
