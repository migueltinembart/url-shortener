import { pgTable, text, serial, date } from "drizzle-orm/pg-core";

export const URLs = pgTable("urls", {
  id: serial("id").primaryKey(),
  urlShort: text("url_short").unique(),
  urlTarget: text("url_target"),
  createdAt: date("created_at").defaultNow().notNull(),
  updatedAt: date("updated_at").defaultNow().notNull(),
});
