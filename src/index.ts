import { Hono } from "hono";
import { UserController } from "./presentation/controller/user";
import { FindUserById } from "./application/findUserById";
import { UserRepository } from "./infrastructure/repository/user";

const userRepository = new UserRepository();
const findUserById = new FindUserById(userRepository);
const userController = new UserController(findUserById);

const app = new Hono();

app.get("/users/:id", (c) => userController.find(c));

Bun.serve({ port: 3000, fetch: (req) => app.fetch(req) });
