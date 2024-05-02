import { Hono } from "hono";

const app = new Hono();

app.get("/health", (c) => {
  return c.text("ok");
});

export default {
  port: 3000,
  fetch: app.fetch,
};
