import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  post: Post;

  constructor(private postService: PostService) {
  }

  allCommentsToLog(postId): void {
    this.postService.getCommentsPost(postId).subscribe(value => {
      console.log(value);
    });
  }

}
