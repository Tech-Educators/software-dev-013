import { plantSpecies } from "./lib"

export default function App() {

  // you can use if statements outside jsx just fine
  // if (blah) {
  //   setStateState(asdf)
  // }

  // dont use if statement or for loops or so on inside jsx.
  return (
    <div>
      <p>you can put arrays in JSX!</p>
      {[
        'hello',
        'world',
        'this',
        'is',
        'an',
        'array',
        'in',
        'jsx'
      ]}
      <br/>
      {/* just using .map to put things on the page. */}
      {/* keys have to be unqiue - so use ID if you have have on the data, or use the index. */}
      {/* react will shout at you if not */}
      {plantSpecies.map((plant, index) => {
        return (
          <p key={index}>{plant.name}</p>
        )
      })}
    </div>
  )
}


// you cannot us 'statement' in JSX 
// if statement are 'statement's - some instruction to do an action - like the assignment operator or an if statement. 
// you can only use 'expression' - anything that resolves to a value in some manner 

// 5 + 5 - expression
// tenery opators - expression
// 