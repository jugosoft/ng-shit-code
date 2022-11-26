import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { ITodo } from './interfaces/ITodo';
import { IPost } from './interfaces/IPost';
import { AppService } from './app.service';

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
  public todos: ITodo[];
  public todoTitle: string;
  loading: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    public todosService: AppService,
  ) { }

  ngOnInit(): void {
    this.todosService.fetchAllTodos(10).subscribe(response => {
      this.todos = response;
      this.cdr.detectChanges();
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

  addTodo() {
    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false,
    }).subscribe(response => {
      this.todos = [response, ...this.todos];
      this.cdr.detectChanges();
    });
  }

  removeTodo(id?: number) {
    this.todosService.removeTodo(id).subscribe(response => {
      if (response) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.cdr.detectChanges();
      }
    });
  }

  fetchAllTodos(count?: number) {
    this.todosService.fetchAllTodos(count).subscribe(response => {
      this.todos = response;
      this.cdr.detectChanges();
    });
  }
}
