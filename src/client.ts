import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

dotenv.config();

console.log(process.env.CONNECTION_STRING);

const connectionString: string | undefined = process.env.CONNECTION_STRING;
if (typeof connectionString != "string") {
  throw new Error("no connection String provided");
}

const client = postgres(connectionString, { max: 1, ssl: "require" });

export const db = drizzle(client);
