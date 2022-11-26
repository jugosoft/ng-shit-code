import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, throwError } from 'rxjs';
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
    const headers = new HttpHeaders({
      'fuck-you': 'fuckYouToo',
    });

    return this.http.get<ITodo[]>(`${this.API_URL}`, {
      headers,
      params: new HttpParams().set('_limit', `${count}`),
    });
  }

  finishTodo(id: number): Observable<ITodo | Error> {
    return this.http.put<ITodo>(`${this.API_URL}/${id}`, {
      completed: true,
    }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
