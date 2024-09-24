import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import BooksPage from "./pages/Books.jsx"
import SingularBookPage from "./pages/SingularBook"
export default function App() {

  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/books/:id' element={<SingularBookPage/>} />
      </Routes>
    </div>
  )
}