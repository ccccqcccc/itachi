export enum PostStatus {}

export class Post {
  readonly id?: number;
  readonly name: string;
  readonly status: PostStatus;

  constructor(params: { id?: number; name: string; status: PostStatus }) {
    this.id = params.id;
    this.name = params.name;
    this.status = params.status;
  }
}
