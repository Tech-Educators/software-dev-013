import {useState} from "react"

export default function App() {

  const [showHippo, setShowHippo] = useState(false)

  function toggleHippo() {
    setShowHippo(!showHippo)
  }

  return (
    <div>

      <button onClick={toggleHippo}>Show hippo</button>

      {/* ternary opator  */}
      {
            showHippo ? 
            <img src='https://www.balisafarimarinepark.com/wp-content/uploads/2023/05/zyro-image-1024x637.jpg' alt='baby hippo' /> 
            : 
            <img src='https://www.birdlife.org/wp-content/uploads/2021/06/Hummingbird-Norbert-Hentges-Unsplash-edited-scaled.jpg' alt='humming bird' />
      }


      {/* just another way to hiding the elemtn */}
      {/* using && to short-curcuit */}
      {showHippo && <img src='https://www.balisafarimarinepark.com/wp-content/uploads/2023/05/zyro-image-1024x637.jpg' alt='baby hippo' /> }
    </div>
  )
}