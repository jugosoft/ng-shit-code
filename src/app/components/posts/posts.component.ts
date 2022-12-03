import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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

  @Input() newPost: IPost;

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const post: IPost = changes['newPost'].currentValue as IPost;
    if (post) {
      this.postsService.posts.unshift(post);
    }
  }

  ngOnInit(): void {
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
