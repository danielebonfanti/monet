import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewPostService } from './services/new-post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent {
  constructor(
    private readonly newPostService: NewPostService,
    private _snackBar: MatSnackBar
  ) {}

  submitNewPost(f: NgForm) {
    this.newPostService
      .addNewPost(f.value)
      .then(() => this.presentSnackbar('Document succefully added'))
      .catch(() => this.presentSnackbar('Document not added :-('));
  }

  presentSnackbar(message: string) {
    const durationInSeconds = 3;
    this._snackBar.open(message, '', {
      duration: durationInSeconds * 1000,
    });
  }
}
