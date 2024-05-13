import { Post } from "../model/post";
import { Tx } from "../model/tx";

export interface PostRepository {
  find(params: { tx: Tx; limit?: number; offset?: number; from?: Date; to?: Date }): Post[];
  findById(params: { tx: Tx; id: number }): Post | null;
  create(params: { tx: Tx; post: Post }): Post;
  update(params: { tx: Tx; post: Post }): Post;
  delete(params: { tx: Tx; id: number }): void;
}
