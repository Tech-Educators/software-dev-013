import { connect } from "../utils/connect.js";


const db = connect()


export const getAllBooks = async (req, res) => {
  console.log(req.coolSecret)
    try {
        if (req.query.include_genres) {
          const result =
            await db.query(`SELECT books.title, books.author, array_agg(genres.name) AS genres
                FROM books
                INNER JOIN book_genres ON books.id = book_genres.book_id
                INNER JOIN genres ON book_genres.genre_id = genres.id
                GROUP BY books.title, books.author;`);
    
          const books = result.rows;
          return res.status(200).json(books);
        }
        const books = (await db.query(`SELECT * FROM books`)).rows;
        res.status(200).json(books);
      } catch (e) {
        res.status(500).json(`${e.name}: ${e.message}`);
      }
}