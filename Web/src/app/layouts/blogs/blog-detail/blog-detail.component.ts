import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit{
  post:any;
  categories = [];

  constructor(private route: ActivatedRoute, private blogService:BlogService, private title: Title) {
  }

  ngOnInit(): void {
    var slug = this.route.snapshot.params.slug;
    this.post = this.blogService.getPostBySlug(slug);

    this.title.setTitle(this.post.title);

    this.categories = this.blogService.getCategories();

  }

  IsArray(obj:any) {
    if(Array.isArray(obj)){
      return true;
    }

    return false;
  }

}
