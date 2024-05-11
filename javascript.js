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