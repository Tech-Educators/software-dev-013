import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import BooksPage from "./pages/Books.jsx"
import SingularBookPage from "./pages/SingularBook"
import NewBookSimple from "./pages/NewBookSimple.jsx"
import NavBar from "./components/Nav.jsx"
import NewBookComplex from "./pages/NewBookComplex.jsx"
export default function App() {

  return (
    <div>
      <h2>Sams books</h2>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/books/:id' element={<SingularBookPage/>} />
        <Route path='/new-book-simple' element={<NewBookSimple />} />
        <Route path='/new-book-complex' element={<NewBookComplex />} />
      </Routes>
    </div>
  )
}