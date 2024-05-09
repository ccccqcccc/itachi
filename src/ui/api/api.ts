import { Hono } from "hono";
import { createFactory } from "hono/factory";

import { App } from "../../app";
import { UserController } from "./user";

export class Api {
  private readonly app: App;
  private readonly api = new Hono();
  private readonly factory = createFactory();

  constructor(app: App) {
    this.app = app;
  }

  exec(port: number) {
    const userController = new UserController(this.app, this.factory);

    this.api.get("/users/:id", ...userController.findOne());

    Bun.serve({ port, fetch: (req) => this.api.fetch(req) });
  }
}
