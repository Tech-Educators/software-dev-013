import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

let db; 

// this is slightly more effeicint 

// pg library pool documentation.
export const connect = () => {
    if (!db) {
        db = new pg.Pool({
            connectionString: process.env.DB_URL
        })
        return db
    }
    return db
}