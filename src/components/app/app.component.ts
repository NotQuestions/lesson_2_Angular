import { Component } from '@angular/core';
import {Post} from '../../models/Post';
import {User} from '../../models/User';
import {PostService} from '../../services/post/post.service';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
users: User[];
posts: Post[];
constructor(private postService: PostService, private userService: UserService) {
  this.postService.getPosts().subscribe( value => this.posts = value);
  this.userService.getUsers().subscribe( value => this.users = value);
}
}
