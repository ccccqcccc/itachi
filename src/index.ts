import { App } from "./app";
import { Api } from "./ui/api";

const app = new App();
const api = new Api(app);

api.exec();
