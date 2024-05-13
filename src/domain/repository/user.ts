import { Tx } from "../model/tx";
import { User } from "../model/user";

export interface UserRepository {
  find(params: { tx: Tx; limit?: number; offset?: number; from?: Date; to?: Date }): User[];
  findOneById(params: { tx: Tx; id: number }): User | null;
  create(params: { tx: Tx; user: User }): User;
  update(params: { tx: Tx; user: User }): User;
}
