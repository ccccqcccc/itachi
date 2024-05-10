import { Post } from "@domain/model";
import { PostRepository } from "@domain/repository";

// TODO
export class PostRepositoryDatastore implements PostRepository {
  constructor() {}

  find(limit?: number, offset?: number, from?: Date, to?: Date): Post[] {
    return [];
  }

  findById(id: number): Post | null {
    return new Post({ id, name: "test", status: "DRAFT" });
  }

  create(post: Post): Post {
    return post;
  }

  update(post: Post): Post {
    return post;
  }

  delete(id: number): void {
    return;
  }
}
