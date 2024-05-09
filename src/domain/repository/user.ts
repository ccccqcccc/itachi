import { User } from "../model/user";

export interface UserRepository {
  find(limit?: number, offset?: number, from?: Date, to?: Date): User[];
  findById(id: number): User | null;
  create(user: User): User;
  update(user: User): User;
}
