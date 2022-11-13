import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleChooserDirective } from './directives/style-chooser.directive';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { MyNgIfDirective } from './directives/my-ng-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleChooserDirective,
    MyNgIfDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
