import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StyleChooserDirective } from './directives/style-chooser.directive';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { DividerPipe } from './pipes/divider.pipe';
import { StringRepeaterPipe } from './pipes/string-repeater.pipe';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { PostComponent } from './components/posts/post/post.component';
import { StarsComponent } from './components/stars/stars.component';
import { generateInterceptor } from './commons/generate-interceptor';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RoutingModule } from './routing/routing.module';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { PostsService } from './components/posts/posts.service';
import { AboutAdditionalComponent } from './components/about-additional/about-additional.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostFormComponent,
    PostComponent,
    StyleChooserDirective,
    MyNgIfDirective,
    DividerPipe,
    StringRepeaterPipe,
    StarsComponent,
    HomeComponent,
    AboutComponent,
    PostDetailComponent,
    AboutAdditionalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [
    generateInterceptor(HeaderInterceptor),
    PostsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
