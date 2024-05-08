"use strict";

let new_user_name;
let new_user_password;
let current_user_name;
let current_user_password;

function log_in (answer){
  current_user_name = answer;
  return;
}



log_in(prompt("Enter Username"));
console.log(`Welcome ${current_user_name}`);




























/*
let new_user_name;
let new_user_password;
let current_user_name;
let current_user_password;
listen for #log_in
execute prompt asking for user and password
function result prompt ()
  if user is in list and password is correct then execute change of buttons for new data about characters
  if user is not in list or cancel then "create a user" and get out of function, nothing changes
  if user is on list and password is different then "Incorrect password" and get out of function, nothing changes

if #log_in clicked run "function result prompt"

*/


/* Buttons
HTML
<button>Press me</button>
<div id="greeting"></div>

Javascript
const button = document.querySelector("button");
function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}
button.addEventListener("click", greet);
*/

/* Select
HTML
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>
<p></p>

Javascript
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}
*/

/*
Switch -> For selection of races, class, etc,
 if this selected in selector in this ID (column character creation)
 then put this in this other id. Default is for race not yet selected.

 switch (expression) {
  case choice1:
    // run this code
    break;
  case choice2:
    // run this code instead
    break;
  // include as many cases as you like
  default:
    // actually, just run this code
    break;
}

Example:
HTML
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>
<p></p>

Javascript
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}
*/