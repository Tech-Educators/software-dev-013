import { connect } from "@/utitlies/connect"
import Image from "next/image"

export default async function Page() {
    const db = connect()

    const books = (await db.query(`SELECT * FROM books`)).rows

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {books.map(book => (
            <div key={book.id} className="relative group">
                <Image
                    src={book.img_url}
                    alt={book.title}
                    height={250}
                    width={100}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <h2 className="text-white text-xl font-bold text-center p-2">
                        {book.title}
                    </h2>
                </div>
            </div>
        ))}
    </div>
    )
}