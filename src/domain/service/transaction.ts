import { Tx } from "@domain/model";

export interface TransactionService {
  exec<T>(action: (tx: Tx) => T): T;
}
