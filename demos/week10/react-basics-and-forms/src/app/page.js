'use client'
import Otter from "@/components/Otter";
import Clicker from "@/components/Clicker";


export default function Home() {
  function sayHello() {
    console.log('Hello')
  }


  return (
    <div>
      <h2 className="">React basics</h2>
      <p>This is a basic component</p>
      <Otter img_url='https://newforestwildlifepark.co.uk/media/1k5mrszk/281157908_5278447725526710_8939388493052300486_n.jpg?rnd=133344220406670000' name='Perry' thisPropNameDoesntMatter={sayHello}/>

      <Otter img_url='https://ourmarinespecies.com/wp-content/uploads/2018/11/sea_otters_16.jpg' name='Jake and Penny' thisPropNameDoesntMatter={sayHello}/>

      <Clicker />
    </div>
  )
}


//https://newforestwildlifepark.co.uk/media/1k5mrszk/281157908_5278447725526710_8939388493052300486_n.jpg?rnd=133344220406670000'



const hello = () => {

}