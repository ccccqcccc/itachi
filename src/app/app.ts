import { FindUsers, FindOneUserById } from "./usecase";
import { UserRepository } from "../domain/repository";

export class App {
  readonly findUsers: FindUsers;
  readonly findOneUserById: FindOneUserById;

  constructor(userRepository: UserRepository) {
    this.findUsers = new FindUsers(userRepository);
    this.findOneUserById = new FindOneUserById(userRepository);
  }
}
