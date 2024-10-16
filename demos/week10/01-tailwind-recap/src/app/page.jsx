import Image from "next/image";
import BigInfoCard from "./components/BigInfoCard";

export default function Home() {
  return (
    <>
      <h1>Hello Tailwind</h1>

      <div className="intro-section">
        <p>This is my intro section</p>
      </div>
      {/* My order of Tailwind is roughly: Layout, Colour, Details and Misc. */}
      <div
        className="flex justify-center gap-[1.78rem] bg-wills-colour  border-[13px] border-solid border-georges-and-shanes-ice
      
      xs: bg-yellow-300
      sm:bg-white 
      md:bg-michelle-red 
      lg:bg-kyles-teal 
      xl:bg-wills-colour"
      >
        <div
          className="flex flex-col gap-4 justify-center items-center m-2 p-2 w-20 
        
        bg-michelle-red text-georges-and-shanes-ice
        
        hover:bg-orange-200 hover:text-kyles-teal 
        
        transition-all duration-1000"
        >
          <p className="text-wills-colour animate-wiggle">
            This is an info card
          </p>
          <p>This is more info</p>
          <p>This is irrelevant</p>
        </div>

        <div className="m-2 p-2 w-20 bg-georges-and-shanes-ice hover:animate-spin">
          <p className="">Hover me</p>
        </div>
        <div className="m-2 p-2 w-20 bg-kyles-teal">
          <p className="text-wills-colour">This is an info card</p>
        </div>
      </div>

      <div className="card-container">
        <BigInfoCard />
        <BigInfoCard />
      </div>
    </>
  );
}
