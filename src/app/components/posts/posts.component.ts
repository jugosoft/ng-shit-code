import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/IPost';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[PostsService],
})
export class PostsComponent implements OnInit, OnChanges {
  
  showAuthor = false;
  
  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const post: IPost = changes['newPost'].currentValue as IPost;
    if (post) {
      this.postsService.posts.unshift(post);
    }
  }

  onShowAuthor() {
    this.router.navigate(['/posts'], {
      queryParams: {
        showAuthor: true
      },
      fragment: 'fragFromClick'
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.showAuthor = !!params['showAuthor'];
    });

    alert(this.route.fragment);
  }

  getPosts() {
    return this.postsService.posts;
  }

  updatePosts(post: IPost): void {
    this.postsService.posts.push(post);
  }

  deletePost(id: string) {
    this.postsService.posts = this.postsService.posts.filter(post => post.id !== id);
  }
}
