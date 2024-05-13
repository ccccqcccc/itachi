import { FindUsers, FindUserById, Usecase } from "./usecase";
import { UserRepository } from "@domain/repository";
import { TransactionService } from "@domain/service";

abstract class AbstractApp {
  readonly [k: string]: Usecase<any, any>;
}

export class App extends AbstractApp {
  readonly findUsers: FindUsers;
  readonly findUserById: FindUserById;

  constructor(userRepository: UserRepository, transactionService: TransactionService) {
    super();

    this.findUsers = new FindUsers(userRepository, transactionService);
    this.findUserById = new FindUserById(userRepository, transactionService);
  }
}
