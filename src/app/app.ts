import { FindUsers, FindUserById } from "./usecase";
import { UserRepository } from "@domain/repository";

export class App {
  readonly findUsers: FindUsers;
  readonly findUserById: FindUserById;

  constructor(userRepository: UserRepository) {
    this.findUsers = new FindUsers(userRepository);
    this.findUserById = new FindUserById(userRepository);
  }
}
