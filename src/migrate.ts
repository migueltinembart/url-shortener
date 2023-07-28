import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

export async function migrateDB() {
  const connectionString = process.env.CONNECTION_STRING;

  if (typeof connectionString != "string") {
    throw new Error("No connections string passed to config");
  }

  const sql = postgres(connectionString, { max: 1, ssl: "require" });
  const migrator = drizzle(sql);
  try {
    await migrate(migrator, { migrationsFolder: "drizzle" });
  } catch (e) {
    console.error(e);
  }

  console.log("finished migration to db 🐳");
}
