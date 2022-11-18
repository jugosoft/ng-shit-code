import { Injectable } from "@angular/core";
import { IPost } from "src/app/app.component";

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public posts: IPost[] = [{
    id: 1,
    title: 'Вчера я помыл подмышки своей кошке',
    text: 'Коротко о тщености бытия и кошачего мытия',
  }, {
    id: 2,
    title: 'Второй пост',
    text: 'Предвестие мытарства в разрезе коррупционного беспредела',
  }, {
    id: 32,
    title: 'Последний пост',
    text: 'В связи с публикацией материалов, направленных на деск...',
  }];

  constructor() { }

}