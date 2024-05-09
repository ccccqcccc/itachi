import { Post } from "../model/post";

export interface PostRepository {
  find(limit?: number, offset?: number, from?: Date, to?: Date): Post[];
  findById(id: number): Post | null;
  create(post: Post): Post;
  update(post: Post): Post;
  delete(id: number): void;
}
