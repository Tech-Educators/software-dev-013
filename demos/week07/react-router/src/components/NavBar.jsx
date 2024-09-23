import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <Link to={'/books'}>Books</Link>
            <Link to={'/'}>Home</Link>
            {/* a cause a full page refresh. */}
            <a href="/party">party</a>

            {/* I have a link, but no route matches this */}
            <br />
            <Link to="/animals">Animals</Link>
        </div>
    )
}

// alt + shift + down arrow key to copy a line on windows
// option + shift + down array key to copy on mac