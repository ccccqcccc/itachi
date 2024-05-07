import { FindOneUserById } from "./usecase/findOneUserById";
import { UserRepositoryDatastore } from "../infrastructure/repository/user";

export class App {
  readonly findOneUserById: FindOneUserById;

  constructor() {
    const userRepository = new UserRepositoryDatastore();

    this.findOneUserById = new FindOneUserById(userRepository);
  }
}
