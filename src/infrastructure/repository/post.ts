import { Post, Tx, PostRepository } from "../../domain";

// TODO
export class PostRepositoryDatastore implements PostRepository {
  constructor() {}

  find(params: { tx: Tx; limit?: number; offset?: number; from?: Date; to?: Date }): Post[] {
    return [];
  }

  findById(params: { tx: Tx; id: number }): Post | null {
    return new Post({ id: params.id, name: "test", status: "DRAFT" });
  }

  create(params: { tx: Tx; post: Post }): Post {
    return params.post;
  }

  update(params: { tx: Tx; post: Post }): Post {
    return params.post;
  }

  delete(params: { tx: Tx; id: number }): void {
    return;
  }
}
