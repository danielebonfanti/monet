import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostContentModule } from '../post-content/post-content.module';
import { PostModule } from '../post/post.module';
import { PostListRoutingModule } from './post-list.routing.module';
import { PostsListComponent } from './posts-list.component';
@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    PostModule,
    MatGridListModule,
    PostListRoutingModule,
    PostContentModule,
  ],
  exports: [PostsListComponent],
})
export class PostsListModule {}
