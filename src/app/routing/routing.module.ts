import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAdditionalComponent } from '../components/about-additional/about-additional.component';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { PostDetailComponent } from '../components/posts/post-detail/post-detail.component';
import { PostsComponent } from '../components/posts/posts.component';
import { RandomAccessGuard } from '../guards/random-access.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  {
    path: 'about', component: AboutComponent, children: [{
      path: 'additional', component: AboutAdditionalComponent, canActivate: [RandomAccessGuard]
    }]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
