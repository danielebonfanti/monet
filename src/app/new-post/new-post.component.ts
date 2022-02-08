import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewPostService } from './services/new-post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  constructor(private readonly newPostService: NewPostService) { }

  submitNewPost(f: NgForm) {
    this.newPostService.addNewPost(f.value)
      .then(() => alert("Succefully added"))
      .catch(() => alert("Fail to add"))
  }
}
