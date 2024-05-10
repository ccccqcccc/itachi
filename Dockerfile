FROM oven/bun:latest as builder

WORKDIR /build

COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install
RUN bun build --compile --target=bun-linux-x64 src/index.ts --outfile app

FROM gcr.io/distroless/base-debian12:latest

WORKDIR /

COPY --from=builder /build/app /app

ENTRYPOINT ["/app"]