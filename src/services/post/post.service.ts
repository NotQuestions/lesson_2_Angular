import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../models/Post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.httpClient.
    get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getCommentsPost(postId): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
