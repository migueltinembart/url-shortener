import express from "express";
import { URLs } from "./schema/schema";
import { db } from "./client";
import { InferModel } from "drizzle-orm";
import { migrateDB } from "./migrate";

type URL = InferModel<typeof URLs, "insert">;

async () => await migrateDB();

const server = express();

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
