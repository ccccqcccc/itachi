import { User } from "../model/user";

export interface UserRepository {
  find(limit?: number, offset?: number, from?: Date, to?: Date): User[];
  findOneById(id: number): User | null;
  create(user: User): User;
  update(user: User): User;
}
