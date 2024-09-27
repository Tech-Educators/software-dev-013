import dotenv from "dotenv";
import pg from "pg";

let db;
dotenv.config();

export const connect = () => {
  if (!db) {
    db = new pg.Pool({
      connectionString: process.env.DB_URL,
    });
    return db;
  }
  return db;
};
