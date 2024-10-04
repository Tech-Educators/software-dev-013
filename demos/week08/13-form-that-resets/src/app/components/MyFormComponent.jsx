"use client";

import { useState } from "react";

export default function MyFormComponent({ IAmAUnicorn }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const myData = Object.fromEntries(formData);
    console.log("I am on the client: ", myData);

    // here, we want the server to do something
    IAmAUnicorn(myData);

    setMessage("");
    event.target.reset();
  }

  function handleChange(event) {
    setMessage(event.target.value);
    console.log("Our message is: ", message);
  }

  return (
    <>
      <h2>This is my form</h2>
      <p>Our message is: {message}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="message"
          placeholder="Write a message or give your name"
          onChange={handleChange}
        />
        {/* <input name="location" placeholder="location" />
        <input name="favecolour" placeholder="colour please" /> */}
        <button>Submit</button>
      </form>
    </>
  );
}
