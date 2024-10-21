import { connect } from "@/utitlies/connect"
import { extractIDFromParams } from "@/utitlies/urls"

export default async function Page({params}) {

    const db = connect()

    const bookInfo = (await db.query(`SELECT * FROM books WHERE id=$1`, [extractIDFromParams(params.id)])).rows[0]

    console.log(bookInfo);
    
    return (
        <>
            
        </>
    )
}