import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/IPost';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: IPost;

  constructor(
    private route: ActivatedRoute,
    private posts: PostsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const currentId: string = params['id'];
      console.log(currentId);
      
      this.post = this.posts.getById(currentId);
    })
  }

}
