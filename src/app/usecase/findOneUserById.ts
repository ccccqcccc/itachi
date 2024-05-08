import { User } from "../../domain/model/user";
import { UserRepository } from "../../domain/repository/user";
import { UserDto } from "../dto/user";
import { transformUserDto } from "../transform/user";
import { Usecase } from "./usecase";

export class FindOneUserById implements Usecase<UserDto | null, { id: number }> {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  exec(params: { id: number }): UserDto | null {
    const user = this.userRepository.findById(params.id);

    if (!user) {
      return null;
    }

    return transformUserDto(user);
  }
}
