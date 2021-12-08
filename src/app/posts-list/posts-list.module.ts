import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostModule } from '../post/post.module';
import { PostsListComponent } from './posts-list.component';
@NgModule({
  declarations: [PostsListComponent],
  imports: [CommonModule, PostModule, MatGridListModule],
  exports: [PostsListComponent],
})
export class PostsListModule {}
