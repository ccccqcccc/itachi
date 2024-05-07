import { User } from "../domain/model/user";
import { UserRepository } from "../domain/repository/user";

export class FindUserById {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  exec(id: number): User | null {
    return this.userRepository.findById(id);
  }
}
