import Image from "next/image";
import styles from "./page.module.css";
import MyFormComponent from "./components/MyFormComponent";

export default function Home() {
  async function myServerAction(formData) {
    "use server";
    console.log("I am on the server: ", formData);
  }

  return (
    <>
      <h1>Home page</h1>
      <p>Hi every one, please tell me your name!</p>

      <MyFormComponent IAmAUnicorn={myServerAction} />
    </>
  );
}
