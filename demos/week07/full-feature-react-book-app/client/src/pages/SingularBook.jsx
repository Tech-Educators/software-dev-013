import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
export default function SingularBookPage() {
    const [bookDetails, setBookDetails] = useState({})

    const { id } = useParams()

    useEffect(() => {
        async function fetchBookDetails() {
            const res = await fetch(`http://localhost:8080/books/${id}?include_genres=true`)
            const details = await res.json()
            setBookDetails(details)
        }

        fetchBookDetails()
    }, [])
    return (
        <div>
            <h2>{bookDetails.title}</h2>
            <img src={bookDetails.img_url} alt={bookDetails.title} />
            <p>{bookDetails.description}</p>

            <p>{bookDetails.quote}</p>
            <p>{bookDetails.released}</p>

            <ul>
            {bookDetails.genres.map(genre => {
                return (
                    <li>{genre}</li>
                )
            })}
            </ul>
        </div>
    )
}

// "id": 2,
// "title": "To Kill a Mockingbird",
// "author": "Harper Lee",
// "description": "A novel about racial injustice in the Deep South seen through the eyes of a young girl.",
// "quote": "You never really understand a person until you consider things from his point of view.",
// "released": "1960-07-10T23:00:00.000Z",
// "img_url": "http://example.com/to_kill_a_mockingbird.jpg",
// "genres": [
//     "Fiction",
//     "Classics",
//     "Classics"
// ]