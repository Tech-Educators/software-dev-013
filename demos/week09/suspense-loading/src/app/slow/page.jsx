import SlowComponent from "@/components/SlowComponent";

export default function SlowPage() {
  return (
    <div>
      <h2>Slow Page</h2>
      <p>This page loads AFTER the SlowCompoentn finished loading</p>
      <p>Before then we see the function that loading.jsx file exports</p>
      <p>So NONE of this page is seen untill it is ALL ready!</p>
      <SlowComponent />
    </div>
  );
}
