import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SettingsModule } from '../settings/settings.module';
import { MonetHeaderComponent } from './monet-header.component';
import { MonetHeaderRoutingModule } from './monet-header.routing.module';

@NgModule({
  declarations: [MonetHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    SettingsModule,
    MatIconModule,
    MonetHeaderRoutingModule,
  ],
  exports: [MonetHeaderComponent],
})
export class MonetHeaderModule {}
