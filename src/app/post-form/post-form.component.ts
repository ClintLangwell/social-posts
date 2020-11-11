import { Post } from './../interfaces/post';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  constructor() {}

  ngOnInit(): void {}

  submitPost = (form: NgForm): void => {
    const newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };

    this.submitted.emit(newPost);
    form.reset();
  };
}
