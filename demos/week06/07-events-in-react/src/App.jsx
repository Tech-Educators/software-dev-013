import { Button } from "./components/Button"
import FancyButton from "./components/FancyButton"

// curly braces if it's just 'export' no curly brackets if it's the default export of the file. 
export default function App() {

  function handleSayHello() {
    console.log('Hello')
  }

  function handleSayGoodbye() {
    console.log('Goodbye')
  }
  return (
    <div>
      <Button></Button>
      <FancyButton handleClick={handleSayGoodbye}/>
      <FancyButton handleClick={handleSayHello}/>
    </div>
  )
}