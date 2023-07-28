import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "./../config";



const client = postgres(config.CONNECTION_STRING, { max: 1, ssl: "require" });

export const db = drizzle(client);
