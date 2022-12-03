import { Injectable } from "@angular/core";
import { IPost } from "src/app/interfaces/IPost";

@Injectable()
export class PostsService {
  public posts: IPost[] = [{
    id: '1',
    title: 'Вчера я помыл подмышки своей кошке',
    text: 'Коротко о тщености бытия и кошачего мытия',
    author: 'Василий',
  }, {
    id: '2',
    title: 'Второй пост',
    text: 'Предвестие мытарства в разрезе коррупционного беспредела',
    author: 'Василий',
  }, {
    id: '32',
    title: 'Последний пост',
    text: 'В связи с публикацией материалов, направленных на деск...',
    author: 'Геннадий',
  }];

  constructor() { }

  getById(id: string): IPost {
    return this.posts.filter(post => post.id === id).pop() || {
      id: '0',
      text: 'Не найден',
      title: 'Создайте новый пост',
      author: 'Не известен... Пока',
    };
  }
}