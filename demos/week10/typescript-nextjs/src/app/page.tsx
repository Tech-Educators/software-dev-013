import ClickEvent from "@/components/ClickEvent";
import Link from "next/link";

export default function Home() {

  function someFunc(formData: FormData) {
    const obj = Object.fromEntries(formData)
  }
  return (
    <div>
      <p>Typescript in NextJS (but really react)</p>
      <Link href='/props'>Props</Link>
      <Link href='/events-and-stuff'>Page 1</Link>
      <p>goes over generics, interfaces, types, how to type submit, click and change events</p>
      <Link href='/partial-update'></Link>


      <ClickEvent />

      {/* when we do onSubmit - the event object is passed to the cbf - when we do action formData is passed. */}
      {/* if you're doing a server action you'll need to do it this way. */}
      <form action={someFunc}>
        <input placeholder="somerandom data"></input>
      </form>
    </div>
  )
}