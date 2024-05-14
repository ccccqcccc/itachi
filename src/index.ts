import { App } from "./app";
import { Api } from "./ui";
import { UserRepositoryDatastore, TransactionServiceDatastore } from "./infrastructure";

const port = Bun.env.API_PORT || "";

const userRepository = new UserRepositoryDatastore();
const transactionService = new TransactionServiceDatastore();

const app = new App(userRepository, transactionService);

const api = new Api(Number(port), app);

api.exec();
