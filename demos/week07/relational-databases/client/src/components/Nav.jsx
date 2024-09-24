import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/books'>books</Link>
            {/* <Link to='/'>Home</Link> */}
        </div>
    )
}