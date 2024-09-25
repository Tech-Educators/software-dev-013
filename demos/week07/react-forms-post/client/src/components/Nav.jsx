import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/books'>books</Link>
            <br/>
            <Link to='/new-book-simple'>Add a new book (simple)</Link>
            <br/>
            <Link to='/new-book-complex'>Add a new book (complex)</Link>
            {/* <Link to='/'>Home</Link> */}
        </div>
    )
}