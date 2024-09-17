import { useState } from "react";
import SimpleVersionWithoutNotes from "./SimpleVersionWithoutNotes";

// we use useState to tell react that a variable should be watched for changes - and when it does, re-render the component.

// also, remember the value of count (or our varible) between re-renders.

export default function App() {
  let normalVar = 0

  console.log('This component is re-rendering!')
  // useState is a function - it takes as an arugment what you want the intial value to be 

  // useState returns an array of 2 elements to us. 

  // the first thing in the array is going to be your state variable
  // the second thing is going to be a function -> You have to use this function to updatethe state varible. You cannot do it manually. 

  const [count, setCount] = useState(0)


  function handleIncrement() {
    setCount(count + 1)
  }

  function handleBadClick() {
    normalVar += 1
    console.log(normalVar)
  }
  return (
    <div>
      <button onClick={handleIncrement}>+1</button>
      <p>You've clicked {count} times!</p>

      <p>This doesn't work because react doesn't know to re-render</p>
      <button onClick={handleBadClick}>+1</button>
      <p>{normalVar}</p>

      <SimpleVersionWithoutNotes/>
    </div>
  )
}

// i want two things on the page 
// a button 
// an a number 

// when the user clicks on the button, the number goes up by one. 


// we've done setup
// we are incrementing the varible
// we were manually re-rendering our DOM to display the correct data. 
// we would need to call a function to redisplay the dom. 
