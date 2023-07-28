import type { Config } from "drizzle-kit";
import dotenv from "dotenv"

dotenv.config()
export default {
  schema: "./src/schema/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.CONNECTION_STRING as string
  }
} satisfies Config;
