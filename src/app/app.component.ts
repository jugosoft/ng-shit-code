import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

export interface IPost {
  id: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  // @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();
  private formToggled: boolean = false;

  public newPost: IPost;

  ngOnInit(): void {
  }

  isFormToggled(): boolean {
    return this.formToggled;
  }

  toggleForm(): void {
    this.formToggled = new Boolean(!this.formToggled).valueOf();
  }

  addPost(post: IPost){
    this.newPost = post;
    this.toggleForm();
  }
}
