import { App } from "@app";
import { Api } from "@ui";
import { UserRepositoryDatastore } from "@infrastructure/repository";
import { TransactionServiceDatastore } from "@infrastructure/service";

const userRepository = new UserRepositoryDatastore();
const transactionServiceDatastore = new TransactionServiceDatastore();

const app = new App(userRepository, transactionServiceDatastore);
const api = new Api(3000, app);

api.exec();
