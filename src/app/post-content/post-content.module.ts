import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContentComponent } from './post-content.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [PostContentComponent],
  imports: [CommonModule, MatGridListModule],
  exports: [PostContentComponent],
})
export class PostContentModule {}
