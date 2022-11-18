import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleChooserDirective } from './directives/style-chooser.directive';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { DividerPipe } from './pipes/divider.pipe';
import { StringRepeaterPipe } from './pipes/string-repeater.pipe';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { PostComponent } from './components/posts/post/post.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
