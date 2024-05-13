import { App } from "@app";
import { Api } from "@ui";
import { UserRepositoryDatastore, TransactionServiceDatastore } from "@infrastructure";

const userRepository = new UserRepositoryDatastore();
const transactionServiceDatastore = new TransactionServiceDatastore();

const app = new App(userRepository, transactionServiceDatastore);

const api = new Api(3000, app);

api.exec();
