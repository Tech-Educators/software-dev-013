import { connect } from "../util/connect.js";

const db = connect();

export const getBooks = async (req, res) => {
  try {
    if (req.query.include_genres) {
      const result =
        await db.query(`SELECT books.title, books.author, array_agg(genres.name) AS genres
            FROM books
            INNER JOIN book_genres ON books.id = book_genres.book_id
            INNER JOIN genres ON book_genres.genre_id = genres.id
            GROUP BY books.title, books.author;`);

      const books = result.rows;
      res.status(200).json(books);
      return;
    }
    const books = (await db.query(`SELECT * FROM books`)).rows;
    res.status(200).json(books);
  } catch (e) {
    res.status(500).json(`${e.name}: ${e.message}`);
  }
};

export const getIndividaulBook = async (req, res) => {
  const { id } = req.params;
  try {
    if (req.query.include_genres) {
      const book = (await db.query(`
                        SELECT books.*, array_agg(genres.name) AS genres
                        FROM books
                        FULL JOIN book_genres ON books.id = book_genres.book_id
                        FULL JOIN genres ON book_genres.genre_id = genres.id
                        WHERE books.id = $1
                        GROUP BY books.id`,
                        [id])).rows[0];
      // return so it doesn't try to also send the book info below.
      return res.status(200).json(book);
    }

    const bookInfo = (await db.query(`SELECT * FROM BOOKS WHERE id = $1`, [id])).rows;
    return res.status(200).json(bookInfo);
  } catch (e) {
    return res.status(500).json(`${e.name}: ${e.message}`);
  }
};
