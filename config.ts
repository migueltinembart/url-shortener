import dotenv from "dotenv";
import z from "zod";

const configSchema = z.object({
  CONNECTION_STRING: z.string(),
});

dotenv.config({ path: "./.env" });

export const config = configSchema.parse(process.env);
