import {useState} from "react"

export default function App() {

  let [count, setCount] = useState(0)
  let [clicksFromAllUsers, setClicksFromAllUsers] = useState(0)

  // in this example, all of the setCounts believe the value of count is 0, and they are all basically running at the same time.
  // static update - good for when your new state doesn't rely on the old state
  function handleClick() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  // functional state update
  // good for when your new state does rely on the old state
  function handleClick() {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    // interesting! But don't worry about this
    // setCount((count) => {foo(count); return count})
  }

  // react likes to batch updates to the ui so it re-render more then needed. 


  // function foo(count) {
  //   const result = count
  //   setClicksFromAllUsers(result)
  // }

  return (
    <div>
      <button onClick={handleClick}>click me!</button>
      <p>{count}</p>
      <p>{clicksFromAllUsers}</p>
    </div>
  )
}


// useEffect is an escape outside of the react component lifecycle
// used for things like fetching data. 
