import { FindUsers, FindOneUserById } from "./usecase";
import { UserRepository } from "@domain/repository";
import { Usecase } from "./usecase";

export class App {
  readonly [x: string]: Usecase<any, any>;

  readonly findUsers: FindUsers;
  readonly findOneUserById: FindOneUserById;

  constructor(userRepository: UserRepository) {
    this.findUsers = new FindUsers(userRepository);
    this.findOneUserById = new FindOneUserById(userRepository);
  }
}
