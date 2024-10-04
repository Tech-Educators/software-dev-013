import pg from "pg"

// these two things are functions from next
// tell nextjs to make sure that it's cache and the database info are the same
import { revalidatePath } from "next/cache"

// make sure to import from next/navigation not the other one
// redirect the user to another page. 
import { redirect } from "next/navigation"



export default function Page() {

    // the 'action' function has to be async  and you have to include 'use server' 
    // this function automatically gets formData
    async function handleSubmit(formData) {
        "use server"

        // connect to the database. 
        const db = new pg.Pool({
            connectionString: process.env.DB_URL
        })

        // get our information our of the formData object - we turn it into a normal object and then destructure the properties out of it.
        const {title, author, description, quote, img_url} = Object.fromEntries(formData)

        // inserting our book info into our database.
        await db.query(`INSERT INTO books (title, author, description, quote, img_url) VALUES ($1, $2, $3, $4, $5)`, [title, author, description, quote, img_url])

        revalidatePath('/book')

        redirect('/book')
    }



    return (
        <div>
            <form action={handleSubmit}>
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