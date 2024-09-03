const form = document.querySelector("form");

async function handleSubmit(event) {
  event.preventDefault();

  // get the information from our form as an object
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // call our API
  const response = await fetch("http://localhost:8080/joke", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();

  console.log("From the server:", responseData);
  form.reset();
}

form.addEventListener("submit", handleSubmit);
