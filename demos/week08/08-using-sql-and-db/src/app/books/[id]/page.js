import pg from "pg"

export default async function Page({params}) {
    const db = new pg.Pool({
        connectionString: process.env.DB_URL
    })

    const book = (await db.query(`SELECT * FROM books WHERE id = $1`, [params.id])).rows[0]

    return (
        <div>
            <p>This is the indivual route page!</p>
            <p>{params.id}</p>

            <p>{book.title}</p>
            <p>{book.author}</p>

            <br/>

            <p>{book.description}</p>
            <br></br>
            <p>{book.quote}</p>
        </div>
    )
}