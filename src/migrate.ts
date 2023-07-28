import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { config } from "../config";

export async function migrateDB() {
  const connectionString = process.env.CONNECTION_STRING;

  const sql = postgres(config.CONNECTION_STRING, { max: 1, ssl: "require" });
  const migrator = drizzle(sql);
  try {
    await migrate(migrator, { migrationsFolder: "drizzle" });
  } catch (e) {
    console.error(e);
  }

  console.log("finished migration to db 🐳");
}
