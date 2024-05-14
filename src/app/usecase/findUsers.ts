import { Tx, TransactionService, UserRepository } from "../../domain";
import { UserDto } from "../dto";
import { transformUserDto } from "../transform";
import { Usecase } from "./usecase";

type Params = { limit?: number; offset?: number; from?: Date; to?: Date };

export class FindUsers implements Usecase<UserDto[], Params> {
  private readonly userRepository: UserRepository;
  private readonly transactionService: TransactionService;

  constructor(userRepository: UserRepository, transactionService: TransactionService) {
    this.userRepository = userRepository;
    this.transactionService = transactionService;
  }

  exec(params: Params): UserDto[] {
    return this.transactionService.exec<UserDto[]>((tx: Tx) => {
      const users = this.userRepository.find({
        tx,
        limit: params.limit,
        offset: params.offset,
        from: params.from,
        to: params.to,
      });

      return users.map((user) => transformUserDto(user));
    });
  }
}
