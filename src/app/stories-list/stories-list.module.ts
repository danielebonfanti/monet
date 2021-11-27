import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesListComponent } from './stories-list.component';



@NgModule({
  declarations: [
    StoriesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StoriesListComponent
  ]
})
export class StoriesListModule { }
