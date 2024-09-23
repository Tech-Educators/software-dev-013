import { Route, Routes } from "react-router-dom";
import Animals from "./components/Animals";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </div>
  )
}