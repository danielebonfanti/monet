import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post/model/post.model';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$ = new Observable<Post[]>();

  constructor(
    private readonly postsService: PostsService
  ) { }

  ngOnInit() {
    this.posts$ = this.postsService.item$;
  }
}
