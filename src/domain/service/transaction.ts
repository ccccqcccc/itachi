import { Tx } from "../model";

export interface TransactionService {
  exec<T>(action: (tx: Tx) => T): T;
}
