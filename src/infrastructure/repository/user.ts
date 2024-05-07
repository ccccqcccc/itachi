import { User } from "../../domain/model/user";
import { UserRepository } from "../../domain/repository/user";

// TODO
export class UserRepositoryDatastore implements UserRepository {
  constructor() {}

  findById(): User | null {
    return null;
  }
}
