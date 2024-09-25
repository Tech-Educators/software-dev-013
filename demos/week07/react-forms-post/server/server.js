// module
import express from "express"
import cors from "cors"
import pg from "pg"
import dotenv from "dotenv"

const PORT = '8080'
const app = express()

app.use(cors())
// reades incomming JSON from the client
app.use(express.json())

dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_URL
})

app.get('/', (req, res) => {
    try {
        // we want to catch error message - like if a client sents a data 
        // throw new Error('That didnt work')
        // normally doing something like database call in here
        res.status(200).send({message: 'Youre looking at my root route, how roude!'})
    } catch (error) {
        res.json(`${error.name}: ${error.message}`)
    }
})


app.get('/books', async (req, res) => {
    // if I wanted to test if a query string is included I can use 
    // sam went on a tanget about using the request object.
    // console.log(req.query.includes_genres)
    try {


        if (req.query.include_genres && !req.query.id) {
            const result = await db.query(`SELECT books.title, books.author, array_agg(genres.name) AS genres
            FROM books
            INNER JOIN book_genres ON books.id = book_genres.book_id
            INNER JOIN genres ON book_genres.genre_id = genres.id
            GROUP BY books.title, books.author;`)
            
            const books = result.rows

            // early exiting - if it sees res.json it will stop running the rest of the function.
            res.status(200).json(books)
            return;
        }

        // this should be moved to a dynamic route instead
        if (req.query.include_genres && req.query.id) {
            console.log(req.query.id)
            const book = (await db.query(`
            SELECT books.*, array_agg(genres.name) AS genres
            FROM books
            FULL JOIN book_genres ON books.id = book_genres.book_id
            FULL JOIN genres ON book_genres.genre_id = genres.id
            WHERE books.id = $1
            GROUP BY books.id`, [req.query.id])).rows[0]
            console.log(book)
            res.status(200).json(book)
            return;
        }

        // short hand to get rows on the same line - using ()'s to signify order of operations.
        const books = (await db.query(`SELECT * FROM books`)).rows
        console.log(books)
        res.status(200).json(books)
    } catch (e) {
        res.status(500).json(`${e.name}: ${e.message}`)
    }
})

app.post('/books', async (req, res) => {
    // this is fine 
    // const title = req.body.title
    // const author = req.body.author

    const {title, author, description, quote, released, img_url} = req.body
    try {

        const result = await db.query(`INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6)`, [title, author, description, quote, released, img_url])


        res.status(200).json({success: result})

    } catch (error) {
        res.status(500).json(`${e.name}: ${e.message}`)
    }
})

// /books -> just all books
// /books?include_genres=true


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))