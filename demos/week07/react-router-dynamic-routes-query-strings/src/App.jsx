import {Routes, Route, Link} from "react-router-dom"
import Materials from "./pages/Materials"

export default function App() {

  const arrayOfMaterials = [
    'tungsten',
    'cashmere',
    'gold',
    'steel',
    'adamantium',
    'unobtainium',
    'molybdenum',
    'polyethylene terephthalate',
    'germanium',
    'Bisphenol A'
]

  return (
    <div>
      <h1>Sams materials shop</h1>
      <p>things like plastic vs wood</p>

      

      {arrayOfMaterials.map(material => {
               return (
                <div>
                    <Link to={`/materials/${material}`}>{material}</Link>
                 </div>
               )
            })}
      
      <Routes>
        <Route path="/" element={<p>This is the home route! Learn more about material science</p>} />


        {/* I would like to be able to click on a material and read more about it, so I'll make the materials route dynamic by using /:somethig */}
 
        <Route path='/materials/:materialName' element={<Materials />}>
            {/* We can have nested routes, which allow you to display other components based on the route  */}
            {/* materials/steel/edit */}
            {/* materials/gold/edit */}
            {/* if you want to do this, you need to inluce an <Outlet> component in the parent page/component */}
            <Route path="edit" element={<p>This is the edit page!</p>} />
            <Route path="photos" element={<p>Beautiful photos of the material</p>} />
        </Route>
      </Routes>

    </div>
  )
}


// materials 