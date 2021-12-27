import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post.routing.module';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, MatCardModule, PostRoutingModule],
  exports: [PostComponent],
})
export class PostModule {}
