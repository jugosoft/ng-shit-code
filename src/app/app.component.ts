import { HttpClient } from '@angular/common/http';
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
  private formToggled: boolean = false;

  public newPost: IPost;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe(response => {
        console.log((<object[]>response).length);
        console.log(response);
      });
  }

  isFormToggled(): boolean {
    return this.formToggled;
  }

  toggleForm(): void {
    this.formToggled = new Boolean(!this.formToggled).valueOf();
  }

  addPost(post: IPost) {
    this.newPost = post;
    this.toggleForm();
  }
}
