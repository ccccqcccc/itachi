import { App } from "./app";
import { Api } from "./ui/api";
import { UserRepositoryDatastore } from "./infrastructure/repository";

const userRepository = new UserRepositoryDatastore();

const app = new App(userRepository);
const api = new Api(app);

api.exec(3000);
