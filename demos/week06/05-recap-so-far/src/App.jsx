import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header username='sam' timeOfDay='morning!'>
      </Header>
      <img />
    </>
  )
}

export default App
