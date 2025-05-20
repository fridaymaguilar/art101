/*
  lab.js - Uses jQuery to toggle styles on sections

  Author: Frida Aguilar 
  Date: May 12 2025 
*/

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}