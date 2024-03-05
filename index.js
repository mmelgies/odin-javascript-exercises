/*let message = "Hello";

message = "World!";

let hello;
hello = message;
alert(hello);

let user = "John", age = 25, message = "Hello";

let user = "John",
    age = 25, 
    message = "Hello";


const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00


let admin,
    name;

    name = "John";
    admin = name;

    let earth;
    let currentUser;

    const birthday = '18.04.1982';

const age = someCode(birthday);*/
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
