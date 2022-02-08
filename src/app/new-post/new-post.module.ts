import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewPostRoutingModule } from './new-post-routing.module';
import { NewPostComponent } from './new-post.component';

@NgModule({
  declarations: [NewPostComponent],
  imports: [
    CommonModule,
    NewPostRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class NewPostModule {}
