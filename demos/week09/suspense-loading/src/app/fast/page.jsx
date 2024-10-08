import FlashingThing from "@/components/FlashingThing";
import SlowComponent from "@/components/SlowComponent";
import { Suspense } from "react";

export default function FastPage() {
  return (
    <div>
      <h2>Fast Page</h2>
      <p>
        This page is going to load the entire content EXCEPT the SlowComponent
      </p>
      <Suspense fallback={<FlashingThing />}>
        <SlowComponent />
      </Suspense>
      <p>I am underneath the slow thing</p>
    </div>
  );
}
