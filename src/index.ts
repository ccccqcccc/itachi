import { api } from "./presentation/api";

Bun.serve({ port: 3000, fetch: (req) => api.fetch(req) });
