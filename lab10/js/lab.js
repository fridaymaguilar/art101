/*
  lab.js - Uses jQuery to toggle styles on sections

  Author: Frida Aguilar 
  Date: May 12 2025 
*/


// Function that returns a random slice of lorem ipsum text
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}

// Add click event to the button
$("#make-convo").click(function() {
  const newText = generateRandomText();
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});