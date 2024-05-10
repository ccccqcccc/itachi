import { UserRepository } from "@domain/repository";
import { UserDto } from "../dto";
import { transformUserDto } from "../transform";
import { Usecase } from "./usecase";

type Params = { id: number };

export class FindUserById implements Usecase<UserDto | null, Params> {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  exec(params: Params): UserDto | null {
    const user = this.userRepository.findOneById(params.id);

    if (!user) {
      return null;
    }

    return transformUserDto(user);
  }
}
