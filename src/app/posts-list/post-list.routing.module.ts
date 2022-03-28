import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostContentComponent } from '../post-content/post-content.component';

const routes: Routes = [
  { path: 'content/:id', component: PostContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PostListRoutingModule {}
