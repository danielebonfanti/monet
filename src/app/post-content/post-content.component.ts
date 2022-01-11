import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post/model/post.model';
import { PostsService } from '../posts-list/services/posts.service';

@Component({
  selector: 'post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostContentComponent implements OnInit {
  post!: Post;

  constructor(private readonly postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number;
    this.route.params.subscribe(params => {
      id = +params['id'];
      this.postsService.item$.subscribe(posts => {
        this.post = posts[id];
        console.log(this.post);
      })
    });
  }

}
