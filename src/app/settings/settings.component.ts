import { Component, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}

@Component({
  selector: 'settings-dialog',
  templateUrl: 'settings-dialog.html',
})
export class SettingsDialog {
  isChecked = false;

  constructor(private renderer: Renderer2) {}

  setTheme() {
    this.renderer.addClass(document.body, 'light-theme');
    this.renderer.removeClass(document.body, 'dark-theme');
  }
}
