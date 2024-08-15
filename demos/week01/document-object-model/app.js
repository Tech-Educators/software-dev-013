console.log("Test");
//the document object is a representation of our HTML file
console.log(document);
console.dir(document);

//select one HTML element from the document

const mainContainer = document.getElementById("main-container");
console.log(mainContainer);

//we can use query selector to select an element by HTML tag, class name, or id
const myH2 = document.querySelector(".main-subtitle");
console.log(myH2);

//change the text in my h2
//I accessed the textContent property and assigned it a new value
myH2.textContent = "I was written in JS!!!";

//create a new HTML element using the HTML tag
const newImage = document.createElement("img");
console.log(newImage);
//access the src and alt properties in the img tag
newImage.src =
  "https://www.datocms-assets.com/20941/1652115808-biscuitshero.png?auto=compress&fm=jpg&w=850";
newImage.alt = "A selection of biscuits";

//you can give this image a class name that you can use to style it
newImage.className = "main-image";

//attach the image to the page
//I need to specify the container (mainContainer) and append a child to it (newImage)
mainContainer.appendChild(newImage);

//you can change the body styles directly here
//you will only do this as a result of user interaction
document.body.style.backgroundColor = "blue";

//remove an HTML element
newImage.remove();
