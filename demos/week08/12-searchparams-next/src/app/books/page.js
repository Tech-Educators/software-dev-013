import BooksGrid from "@/components/structure/BooksGrid"
import { connect } from "@/utitlies/connect"
import { formatTitle } from "@/utitlies/urls"
import Image from "next/image"
import Link from "next/link"

export default async function Page({searchParams}) {

    console.log(searchParams)
    // ALL page.js files will get the below object passed to them - it doesn't matter if they're empty or not. 
    // { params: {}, searchParams: {} }
    const db = connect()

    const books = (await db.query(`SELECT * FROM books`)).rows

    console.log(books)

    const sorted = books.sort((a, b) => {
        // a and b represent the two things we're comparing. 
        if (searchParams.sortBy == 'asc') {
            // if positive it will swap a and b, if negative dont swap. It runs 
            // localeCompare returns 
            return a.title.localeCompare(b.title)
        }
    })
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <div>
            <Link href='/books?sortBy=asc'>Sort by asc</Link>
            <Link href='/books'>Remove sort</Link>
        </div>
        <BooksGrid books={sorted} />
    </div>
    )
}


//0000 0000
// 