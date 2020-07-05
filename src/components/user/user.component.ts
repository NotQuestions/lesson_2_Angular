import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user/user.service';
import {PostService} from '../../services/post/post.service';
import {Post} from '../../models/Post';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  @Input()
  user: User;
  constructor(private userService: UserService) {}
  allPostLog(userId): void{
    this.userService.getPostUser(userId).subscribe(value => {
      console.log(value);
    });
  }



}
