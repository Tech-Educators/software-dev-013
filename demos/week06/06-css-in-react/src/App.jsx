import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookParagraph from './components/BookParagraph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookParagraph />
      <p>this one is in the app component</p>
      <h1>Hello world!</h1>
    </>
  )
}

export default App
