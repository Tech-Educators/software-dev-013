import {useState} from "react"

export default function App() {
  let [count, setCount] = useState({
    name: 'Sam',
    
  })

  let [count2, setCount2] = useState(10)

  function handleClick() {
    count = count + 1
    console.log(count)
  }


  function handleClick2() {
    setCount2(count2 + 1)
    console.log(count)
  }

  return (
    <div>
        <button onClick={handleClick}>click me</button>
        <p>{count}</p>

        <br/>

        <button onClick={handleClick2}>this will cause a re-render because it's correctly usting the 'setState' function</button>
        <p>{count2}</p>
    </div>
  )
}