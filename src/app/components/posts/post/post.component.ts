import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/IPost';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: IPost;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.post = data['post'];
    });
  }

  deletePost(id: string): boolean {
    if (!id) {
      return false;
    }

    this.onDelete.emit(id);
    return true;
  }
}
