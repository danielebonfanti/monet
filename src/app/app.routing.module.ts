import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
