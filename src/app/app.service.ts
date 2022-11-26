import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { ITodo } from './interfaces/ITodo';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private http: HttpClient
  ) { }

  removeTodo(id?: number): Observable<null> {
    return this.http.delete<null>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  fetchAllTodos(count?: number): Observable<ITodo[]> {
    const limitString = count ? `?_limit=${count}` : '';
    return this.http.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos${limitString}`);
  }
}
