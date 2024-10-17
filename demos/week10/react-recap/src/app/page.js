import Pet from "@/components/Pet";
import Image from "next/image";
import { PetTwo } from "@/components/Pet";
import Clicker from "@/components/Clicker";

export default function Home() {

  const camel = PetTwo('camel.jpg', 'camel', true)
  // console.log(camel)
  
  console.log(PetTwo('dog.jpg', 'dog', true))
  console.log(PetTwo('bird.jpg', 'camel', true))

  return (
   <main>
      {/* THIS IS WHERE WE CALL THE COMPONENT */}
      <Pet pet_name='camel' img_url='https://upload.wikimedia.org/wikipedia/commons/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg' isPet='something'/>
      <Pet fasdfa='hell0' unicorn='yes'/>

      {/* <img src="http://buttergly.fly" alt="sdafsdf" /> */}

      <Clicker />
    </main>
  );
}


// when we're programming, the left side of the ='s is always named whatever we want. 