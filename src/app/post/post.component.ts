import { Post } from './../interfaces/post';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() deleted = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  deletePost = (): void => {
    this.deleted.emit();
  };
}
