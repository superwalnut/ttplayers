import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../service/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  categories = [];
  posts = [];

  constructor(private blogService:BlogService, private route: ActivatedRoute) {    
  }

  ngOnInit(): void {
    const category = this.route.snapshot.queryParams.category;
    if(category){
      console.log('get category', category);
      this.posts = this.blogService.getPosts(category);
    } else {
      console.log('get all posts');
      this.posts = this.blogService.getPosts(null);
    }
    this.categories = this.blogService.getCategories();

    this.posts = this.posts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    console.log('posts', this.posts);
  }

}
