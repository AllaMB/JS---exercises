// №1 to change the title's text

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello, world!";

// №1.1 to change the title's color
myHeading.style.color = "purple"

// №2 to change the paragraph
const newParagraph = document.querySelector("p");
newParagraph.textContent = "Look who we are:";


// №3 to add a new list element

let list = document.querySelector("ul");
let newListItem = document.createElement("li");
newListItem.textContent = "contributors";
list.appendChild(newListItem);


// №4 to change the alt of img

// Finding image element by tag <img>
let image = document.querySelector("img");

// Changing alt 
image.alt = "The Firefox logo";



// №5 to add a new DOM element

// Creating a new div element
var newDiv = document.createElement('div');

// Adding text to the new div element
newDiv.textContent = 'New div element is created with the use of JavaScript!';

// Adding the  new div element to the end of <body>
document.body.appendChild(newDiv);
