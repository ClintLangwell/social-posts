import { Post } from './../interfaces/post';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'First Thought',
      thought: 'This is the first thought',
    },
    {
      title: 'Second Thought',
      thought: 'This is the second thought',
    },
    {
      title: 'Third Thought',
      thought: 'This is the third thought',
    },
    {
      title: 'Fourth Thought',
      thought: 'This is the fourth thought',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onDelete = (index: number) => {
    this.posts.splice(index, 1);
  };

  onSubmit = (post: Post): void => {
    this.posts.push(post);
  };

  showForm = (): void => {
    console.log('popup?');
  };
}
