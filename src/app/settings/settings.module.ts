import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SettingsComponent, SettingsDialog } from './settings.component';
import { ThemeSettingComponent } from './theme-setting/theme-setting.component';

@NgModule({
  declarations: [SettingsComponent, SettingsDialog, ThemeSettingComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {}
