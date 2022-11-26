import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { ITodo } from './interfaces/ITodo';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly API_URL: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(
    private http: HttpClient
  ) { }

  removeTodo(id?: number): Observable<null> {
    return this.http.delete<null>(`${this.API_URL}/${id}`);
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(`${this.API_URL}`, todo);
  }

  fetchAllTodos(count?: number): Observable<ITodo[]> {
    const limitString = count ? `?_limit=${count}` : '';
    return this.http.get<ITodo[]>(`${this.API_URL}/${limitString}`);
  }

  finishTodo(id: number): Observable<ITodo> {
    return this.http.put<ITodo>(`${this.API_URL}/${id}`, {
      completed: true,
    });
  }
}
