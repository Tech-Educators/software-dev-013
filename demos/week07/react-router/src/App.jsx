import {Route, Routes, Link} from "react-router-dom"
import NavBar from "./components/NavBar"

// import our books componet
import Books from "./pages/Books"


export default function App() {
  return (
    <div>

      {/* The h1 below will render on every page */}
      <h1>Hello class!</h1>
      <NavBar />
      {/* All the routes for our application! */}
      {/* We put our individual <Route> components inside */}
      <Routes>
        <Route path="/" element={<p>This is home route</p>} />
        <Route path="/books" element={<Books />} />
        <Route path="*" element={<p>Couldn't find that</p>} />
      </Routes>

    </div>
  )
}