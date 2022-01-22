import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule],
  exports: [LoginComponent]
})
export class LoginModule {}
