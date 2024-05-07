import { User } from "../../domain/model/user";
import { UserRepository } from "../../domain/repository/user";
import { Usecase } from "./usecase";

export class FindOneUserById implements Usecase<User | null, { id: number }> {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  exec(params: { id: number }): User | null {
    return this.userRepository.findById(params.id);
  }
}
