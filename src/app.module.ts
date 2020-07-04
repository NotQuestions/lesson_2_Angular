import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import {PostService} from './services/post/post.service';
import {UserService} from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
