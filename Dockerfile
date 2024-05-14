FROM oven/bun:latest as builder

WORKDIR /build

COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install && bun build --compile --minify index.ts --outfile itachi

FROM gcr.io/distroless/base-debian12:latest

WORKDIR /

COPY --from=builder /build/itachi /itachi

ENTRYPOINT ["/itachi"]