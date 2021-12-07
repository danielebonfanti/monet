import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list.component';
import { PostModule } from '../post/post.module';

@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    CommonModule,
    PostModule
  ],
  exports: [
    PostsListComponent
  ]
})
export class PostsListModule { }
