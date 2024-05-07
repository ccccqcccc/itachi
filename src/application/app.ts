import { FindOneUserById } from "./usecase/findOneUserById";
import { UserRepository } from "../domain/repository/user";

export class App {
  readonly findOneUserById: FindOneUserById;

  constructor(userRepository: UserRepository) {
    this.findOneUserById = new FindOneUserById(userRepository);
  }
}
