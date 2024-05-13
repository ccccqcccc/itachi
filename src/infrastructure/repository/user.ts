import { Tx, User } from "@domain/model";
import { UserRepository } from "@domain/repository";

// TODO
export class UserRepositoryDatastore implements UserRepository {
  constructor() {}

  find(params: { tx: Tx; limit?: number; offset?: number; from?: Date; to?: Date }): User[] {
    return [];
  }

  findOneById(params: { tx: Tx; id: number }): User | null {
    return new User({ id: params.id, posts: [] });
  }

  create(params: { tx: Tx; user: User }): User {
    return params.user;
  }

  update(params: { tx: Tx; user: User }): User {
    return params.user;
  }
}
