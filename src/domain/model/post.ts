import { PostStatus } from "./postStatus";

export class Post {
  readonly id: number | undefined;
  readonly name: string;
  readonly status: PostStatus;

  constructor(params: { id?: number; name: string; status: PostStatus }) {
    this.id = params.id;
    this.name = params.name;
    this.status = params.status;
  }
}
