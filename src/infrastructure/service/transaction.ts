import { TransactionService } from "@domain/service";
import { Tx } from "@domain/model";

// TODO
export class TransactionServiceDatastore implements TransactionService {
  constructor() {}

  exec<T>(action: (tx: Tx) => T): T {
    const tx = {};

    return action(tx);
  }
}
