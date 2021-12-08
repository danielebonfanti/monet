import { Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Breakpoint } from '../model/breakpoint.enum';
import { Post } from '../post/model/post.model';
import { LayoutService } from '../services/layout.service';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts$ = new Observable<Post[]>();
  destroyed = new Subject<void>();
  numberOfColumn = 3;

  constructor(
    private readonly postsService: PostsService,
    private readonly layoutService: LayoutService
  ) {
    this.layoutService.getBreakpoint();
  }

  ngOnInit() {
    this.layoutService.breakpoint$.subscribe((result) => {
      switch (result) {
        case Breakpoint.XSmall:
        case Breakpoint.Small:
          this.numberOfColumn = 1;
          break;
        case Breakpoint.Medium:
        case Breakpoint.Large:
        case Breakpoint.XLarge:
        default:
          this.numberOfColumn = 3;
          break;
      }
    });
    this.posts$ = this.postsService.item$;
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
