import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPost';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('axaxaxaxa') post: IPost;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deletePost(id: string): boolean {
    if (!id) {
      return false;
    }

    this.onDelete.emit(id);
    return true;
  }
}
