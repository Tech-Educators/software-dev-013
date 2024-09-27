import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import BooksPage from "./pages/Books.jsx"
import SingularBookPage from "./pages/SingularBook"
import NavBar from "./components/Nav.jsx"
export default function App() {

  return (
    <div>
      <h2>Sams books</h2>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/books/:id' element={<SingularBookPage/>} />
      </Routes>
    </div>
  )
}