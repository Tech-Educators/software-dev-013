// module
import express from "express"
import cors from "cors"
import pg from "pg"
import dotenv from "dotenv"
// import { router } from "./router.js"
import { router } from "./router.js"

const PORT = '8080'
export const app = express()

app.use(cors())
// reads incomming JSON from the client`
app.use(express.json())

app.use('/api', router)


app.use((req, res, next) => {
    req.thisismyownproperty = five
    next()
})



app.get('/', (req, res) => {
    console.log(req.thisismyownproperty)
    try {
        res.status(200).send({message: 'Youre looking at my root route, how roude!'})
    } catch (error) {
        res.json(`${error.name}: ${error.message}`)
    }
})


// app.get('/books', async (req, res) => {
//     // if I wanted to test if a query string is included I can use 
//     // sam went on a tanget about using the request object.
//     // console.log(req.query.includes_genres)
//     try {


//         if (req.query.include_genres && !req.query.id) {
//             const result = await db.query(`SELECT books.title, books.author, array_agg(genres.name) AS genres
//             FROM books
//             INNER JOIN book_genres ON books.id = book_genres.book_id
//             INNER JOIN genres ON book_genres.genre_id = genres.id
//             GROUP BY books.title, books.author;`)
            
//             const books = result.rows

//             // early exiting - if it sees res.json it will stop running the rest of the function.
//             res.status(200).json(books)
//             return;
//         }

//         // short hand to get rows on the same line - using ()'s to signify order of operations.
//         const books = (await db.query(`SELECT * FROM books`)).rows
//         console.log(books)
//         res.status(200).json(books)
//     } catch (e) {
//         res.status(500).json(`${e.name}: ${e.message}`)
//     }
// })

// // indivual book route

// app.get('/books/:id', async (req, res) => {
//     const {id} = req.params
//     try {
//             if (req.query.include_genres) {
//                 console.log(req.query.id)
//                 const book = (await db.query(`
//                 SELECT books.*, array_agg(genres.name) AS genres
//                 FROM books
//                 FULL JOIN book_genres ON books.id = book_genres.book_id
//                 FULL JOIN genres ON book_genres.genre_id = genres.id
//                 WHERE books.id = $1
//                 GROUP BY books.id`, [id])).rows[0]
//                 console.log('single book page:',book)
//                 // return so it doesn't try to also send the book info below.
//                 return res.status(200).json(book)
//             }

//             const bookInfo = (await db.query(`SELECT * FROM BOOKS WHERE id = $1`, [id])).rows
//             return res.status(200).jons(bookInfo)

//     } catch (e) {
//         return res.status(500).json(`${e.name}: ${e.message}`)
//     }
// })
// app.post('/books', async (req, res) => {
//     // this is fine 
//     // const title = req.body.title
//     // const author = req.body.author

//     const {title, author, description, quote, released, img_url} = req.body
//     try {

//         const result = await db.query(`INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6)`, [title, author, description, quote, released, img_url])


//         res.status(200).json({success: result})

//     } catch (error) {
//         res.status(500).json(`${e.name}: ${e.message}`)
//     }
// })

// /books -> just all books
// /books?include_genres=true


app.listen(PORT, () => console.log(`Listening on port: ${PORT} (҂◡_◡) ᕤ'`))