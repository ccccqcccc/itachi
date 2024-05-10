import { User } from "@domain/model";
import { UserRepository } from "@domain/repository";

// TODO
export class UserRepositoryDatastore implements UserRepository {
  constructor() {}

  find(limit?: number, offset?: number, from?: Date, to?: Date): User[] {
    return [];
  }

  findById(id: number): User | null {
    return new User({ id, posts: [] });
  }

  create(user: User): User {
    return user;
  }

  update(user: User): User {
    return user;
  }
}
