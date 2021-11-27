import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoriesListModule } from './stories-list/stories-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoriesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
