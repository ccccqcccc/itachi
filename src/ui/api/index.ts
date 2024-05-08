import { Hono } from "hono";

import { App } from "../../app";
import { UserController } from "./controller/user";
import { createFactory } from "hono/factory";

export class Api {
  private readonly app: App;

  constructor(app: App) {
    this.app = app;
  }

  exec() {
    const api = new Hono();
    const factory = createFactory();

    const userController = new UserController(this.app, factory);

    api.get("/users/:id", ...userController.findOne());

    Bun.serve({ port: 3000, fetch: (req) => api.fetch(req) });
  }
}
