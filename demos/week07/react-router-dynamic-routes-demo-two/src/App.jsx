import {Link, Routes, Route} from "react-router-dom"
import Materials from "./pages/Materials"
import IndividualMaterial from "./pages/IndividualMaterial"

export default function App() {
  return (
    <div>


      <Routes>
        {/* all materials */}
        <Route path="/materials" element={<Materials/>} />
        {/* individual ones */}
        <Route path="/materials/:id" element={<IndividualMaterial />} />
      </Routes>
    </div>
  )
}


// /matertials
// /materials/:id