import { UserRepository } from "../../domain/repository";
import { UserDto } from "../dto";
import { transformUserDto } from "../transform";
import { Usecase } from "./usecase";

type Params = { limit?: number; offset?: number; from?: Date; to?: Date };

export class FindUsers implements Usecase<UserDto[], Params> {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  exec(params: Params): UserDto[] {
    const users = this.userRepository.find(params.limit, params.offset, params.from, params.to);

    return users.map((user) => transformUserDto(user));
  }
}
