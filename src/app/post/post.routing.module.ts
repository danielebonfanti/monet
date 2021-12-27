import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostContentComponent } from '../post-content/post-content.component';
import { PostComponent } from './post.component';

const routes: Routes = [
  { path: 'content', component: PostContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
