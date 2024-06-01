"use strict";

let new_user_name;
let new_user_password;
let current_user_name;
let current_user_password;

function log_in (user,password){
  current_user_name = user;
  current_user_password = password;
  return;
}

function register (user,password){
  new_user_name = user;
  new_user_password = password;
  return;
}

/* Create a function that validates the login form with the aid of the e-mail check function */

// Active learning: A dynamic list -> Find out how to say "only active in review_characters.html"
let unorderedList = document.querySelector(".character_list");
let inputWithData = document.querySelector("#item");
let addItemButton = document.querySelector("#add_item");
let value = '';

addItemButton.addEventListener("click",addItemWithDeleteButtonToList);

function addItemWithDeleteButtonToList () {
        value = inputWithData.value;
        inputWithData.value = '';
        if (value !== ""){
          const listItem = document.createElement("li");
          const spanItem = document.createElement("span");
          const buttonItem = document.createElement("button");
          
          spanItem.textContent = value;
          buttonItem.textContent = "Delete";
          listItem.appendChild(spanItem);
          listItem.appendChild(buttonItem);
          unorderedList.appendChild(listItem);

          buttonItem.addEventListener("click",()=>{
                  unorderedList.removeChild(listItem);
                  inputWithData.focus();
          });
        };
        inputWithData.focus();
}