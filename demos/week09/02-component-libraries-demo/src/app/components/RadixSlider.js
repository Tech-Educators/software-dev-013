"use client";
// I'm defining 'use client' because I wanted to use the 'onChange' event listener
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export default function RadixSlider() {
  const [myValue, setMyValue] = useState(0);

  function handleChange(event) {
    console.log(event.target.value);
    setMyValue(event.target.value);
  }

  return (
    <>
      <h2>{myValue}</h2>
      <form onChange={handleChange}>
        <Slider.Root className="SliderRoot" defaultValue={[50]}>
          <Slider.Track className="SliderTrack">
            <Slider.Range className="SliderRange" />
          </Slider.Track>

          <Slider.Thumb className="w-5 h-5 block rounded bg-black" />
        </Slider.Root>
      </form>
    </>
  );
}
