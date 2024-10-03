import pg from "pg"

export default function Page() {

    // This is a server action - the function below will be executed server side (through magic and code splitting)
    async function handleSubmitBook(formData) {
        // you have to put this directive in
        "use server"
        const db = new pg.Pool({
            connectionString: process.env.DB_URL
        })

        const {title, author, description, quote, img_url} = Object.fromEntries(formData)

        await db.query(`INSERT INTO books (title, author, description, quote, img_url) VALUES ($1, $2, $3, $4, $5)`, [title, author, description, quote, img_url])

    }


    return (
        <div>
            <form action={handleSubmitBook}>
                <input name='title'  placeholder="title"></input>
                <input name='author' placeholder="author"></input>
                <input name='description' placeholder="description"></input>
                <input name='quote' placeholder="quote"></input>
                {/*  sql needs a certain format for dates so not gonna do that.*/}
                {/* <input name='released'></input> */}
                <input name='img_url' placeholder="img_url"></input>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

// title, author, description, quote, released, img_url