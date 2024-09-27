import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { routes } from "./routes.js"


export const app = express()

// telling it to use middleware.
app.use(express.json())
app.use(cors())

// every single request has to go through this callback function
app.use((req, res, next) => {
    console.log('Hello')
    req.coolSecret = 5
    next()
})  

// applying up a router
app.use('/api', routes)

dotenv.config()

const PORT = 7070

app.listen(PORT, () => console.log('server running '))
