import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

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
  private posts: IPost[] = [{
    id: 1,
    title: 'Вчера я помыл подмышки своей кошке',
    text: 'Коротко о тщености бытия и кошачего мытия',
  }, {
    id: 2,
    title: 'Второй пост',
    text: 'Предвестие мытарства в разрезе коррупционного беспредела',
  }, {
    id:32,
    title: 'Последний пост',
    text: 'В связи с публикацией материалов, направленных на деск...',
  }];

  ngOnInit(): void {
  }

  isFormToggled(): boolean {
    return this.formToggled;
  }

  getPosts(): IPost[] {
    return this.posts;
  }

  toggleForm(): void {
    this.formToggled = !this.formToggled;
  }

  updatePosts(post: IPost): void {
    this.posts.push(post);
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
