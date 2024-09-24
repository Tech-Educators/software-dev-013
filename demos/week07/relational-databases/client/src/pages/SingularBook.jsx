import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
export default function SingularBookPage() {
    const [bookDetails, setBookDetails] = useState({})

    const { id } = useParams()

    useEffect(() => {
        async function fetchBookDetails() {
            const res = await fetch(`http://localhost:8080/books?include_genres=true&id=${id}`)
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
        </div>
    )
}