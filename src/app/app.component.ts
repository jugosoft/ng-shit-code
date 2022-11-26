import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { ITodo } from './interfaces/ITodo';
import { IPost } from './interfaces/IPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private formToggled: boolean = false;
  public todos: ITodo[];
  public newPost: IPost;
  public todoTitle: string;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe(response => {
        this.todos = response as ITodo[];
        // this.todos = <ITodo[]>response;
      });
  }

  isFormToggled(): boolean {
    return this.formToggled;
  }

  toggleForm(): void {
    this.formToggled = new Boolean(!this.formToggled).valueOf();
  }

  addPost(post: IPost): void {
    this.newPost = post;
    this.toggleForm();
  }

  addTodo(): void {
    if (this.todoTitle && !this.todoTitle.trim()) {
      return;
    }

    const todo: ITodo = {
      title: this.todoTitle,
      completed: false,
    }

    this.todoTitle = '';
    this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos', todo)
      .subscribe(response => {
        console.log(response);
        this.todos = [todo, ...this.todos];
        this.cdr.detectChanges();
      });
  }
}
