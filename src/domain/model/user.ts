import { Post } from "./post";

export class User {
  readonly id?: number;
  readonly posts: Post[];

  constructor(params: { id?: number; posts: Post[] }) {
    this.id = params.id;
    this.posts = params.posts;
  }
}
