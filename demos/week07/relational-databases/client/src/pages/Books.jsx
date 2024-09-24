import {useState, useEffect} from "react"
import { Link } from "react-router-dom"

export default function BooksPage() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        async function fetchBooks() {
            const res = await fetch(`http://localhost:8080/books`)
            const books = await res.json() 

            setBooks(books)
        }

        fetchBooks()
    }, [])
    return (
        <div>
            <p>books</p>

            {books.map(book => (
                <div>
                    <Link to={`/books/${book.id}`}>
                        <img src={book.img_url} alt={book.title} />
                        <h3>{book.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}