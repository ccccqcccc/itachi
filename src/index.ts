import { App } from "@app";
import { Api } from "@ui";
import { UserRepositoryDatastore } from "@infrastructure/repository";

const userRepository = new UserRepositoryDatastore();

const app = new App(userRepository);
const api = new Api(3000, app);

api.exec();
