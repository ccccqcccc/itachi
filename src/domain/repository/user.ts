import { User } from "../model/user";

export interface UserRepository {
  findById(id: number): User | null;
}
