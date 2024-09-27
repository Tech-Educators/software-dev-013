import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

// so we don't create a new db conenction every time, only if it doesn't exist

let db;

export const connect = () => {
    if (!db) {
        db = new pg.Pool({
            connectionString: process.env.DB_URL
        })
        return db
    }
    return db
}