import { FindUsers, FindUserById } from "./usecase";
import { UserRepository, TransactionService } from "../domain";

export class App {
  readonly findUsers: FindUsers;
  readonly findUserById: FindUserById;

  constructor(userRepository: UserRepository, transactionService: TransactionService) {
    this.findUsers = new FindUsers(userRepository, transactionService);
    this.findUserById = new FindUserById(userRepository, transactionService);
  }
}
