import { UserRepository } from "@domain/repository";
import { UserDto } from "../dto";
import { transformUserDto } from "../transform";
import { Usecase } from "./usecase";
import { TransactionService } from "@domain/service";
import { Tx, User } from "@domain/model";

type Params = { id: number };

export class FindUserById implements Usecase<UserDto | null, Params> {
  private readonly userRepository: UserRepository;
  private readonly transactionService: TransactionService;

  constructor(userRepository: UserRepository, transactionService: TransactionService) {
    this.userRepository = userRepository;
    this.transactionService = transactionService;
  }

  exec(params: Params): UserDto | null {
    return this.transactionService.exec<UserDto | null>((tx: Tx) => {
      const user = this.userRepository.findOneById({ tx, id: params.id });

      if (!user) {
        return null;
      }

      return transformUserDto(user);
    });
  }
}
