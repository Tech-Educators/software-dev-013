import pg from "pg"
import Link from "next/link"

export default async function BookPage({params, searchParams}) {

    const db = new pg.Pool({
        connectionString: process.env.DB_URL
    })
    // finish doing the await and then do the rows
    const books = await db.query(`SELECT * FROM books`)
    const final = books.rows

    console.log(final)
    return (
        <div>
            <h2>All of the books!</h2>
            {final.map(book => (
                <div>
                    <Link href={`books/${book.id}`}>{book.title}</Link>
                </div>
            ))}
        </div>
    )
}