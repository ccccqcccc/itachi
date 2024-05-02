import { describe, expect, it } from "bun:test";
import app from ".";

describe("health check", () => {
  it("Should return 200 Response", async () => {
    const req = new Request("http://localhost:3000/health");
    const res = await app.fetch(req);

    expect(res.status).toBe(200);
  });
});
