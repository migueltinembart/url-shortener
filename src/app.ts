import Fastify from "fastify";
import { URLs } from "./schema/schema";
import { db } from "./client";
import { InferModel } from "drizzle-orm";
import { migrateDB } from "./migrate";
import fastify from "fastify";

const server = Fastify({ logger: true });

server.post("/addUrl", async (req, res) => {
  return db.insert(URLs).values(
    {
      id: URLs.id.default,
      urlTarget: "https://random.com/random",
      urlShort: "http://localhost:5000",
      createdAt: URLs.createdAt.default,
      updatedAt: URLs.updatedAt.default,

    }
  )
})

server.get("/", async (req, res) => {
  return db.select().from(URLs);
});

async function run() {
  try {
    await server.listen({ port: 3000 });
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
}

run();
/*

server.post("/add", async (req, res, next) => {
  try {
    await db.insert(URLs).values({
      id: URLs.id.default,
      urlShort: "http://localhost:5000/12345678",
      urlTarget: "https://random.com",
    });
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(403);
    next(e);
  }
});

server.get("/", async (req, res) => {
  res.send(await db.select().from(URLs));
});

server.listen("5000", () => {
  console.log("Interface listening on http://localhost:5000");
});

*/
