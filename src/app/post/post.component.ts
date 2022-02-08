import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  constructor() {}

  ngOnInit(): void {}
}
