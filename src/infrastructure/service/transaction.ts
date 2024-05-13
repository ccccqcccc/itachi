import { Tx, TransactionService } from "@domain";

// TODO
export class TransactionServiceDatastore implements TransactionService {
  constructor() {}

  exec<T>(action: (tx: Tx) => T): T {
    const tx = {};

    return action(tx);
  }
}
