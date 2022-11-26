import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { ITodo } from './interfaces/ITodo';
import { IPost } from './interfaces/IPost';
import { delay } from 'rxjs';

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
  loading: boolean = false;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.fetchAllTodos(10);
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

  fetchAllTodos(count?: number): void {
    this.loading = true;
    const limitString = count ? `?_limit=${count}` : '';
    this.http.get(`https://jsonplaceholder.typicode.com/todos${limitString}`)
      .pipe(
        delay(Math.random()* 2000),
      )
      .subscribe(response => {
        this.loading = false;
        this.todos = response as ITodo[];
        // this.todos = <ITodo[]>response;
        this.cdr.detectChanges();
      });
  }
}
