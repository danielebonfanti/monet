import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsDialog);

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
  constructor() {}
}
