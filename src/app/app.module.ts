import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { PostsListModule } from './posts-list/posts-list.module';
import { SettingsModule } from './settings/settings.module';
@NgModule({
  declarations: [AppComponent, ContactsComponent],
  imports: [
    BrowserModule,
    PostsListModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    AppRoutingModule,
    SettingsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
