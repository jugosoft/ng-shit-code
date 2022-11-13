import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();

  public title: string;
  public text: string;

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (!this.title || !this.text) {
      return;
    }

    const post: IPost = {
      id: (Math.random() * 100) % 10,
      title: this.title,
      text: this.text,
    };

    this.onAdd.emit(post);

    this.text = '';
    this.title = '';
  }
}
