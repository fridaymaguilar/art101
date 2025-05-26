/*
 * Author: Your Name
 * Created: 5/26/2025
 * Lab 13 - Loops: FizzBuzzBoom
 * This script prints numbers from 1 to 200 and labels them based on whether
 * they're divisible by 3 (Fizz), 5 (Buzz), and/or 7 (Boom).
 */

function fizzBuzzBoom() {
  let outputStr = "";

  for (let i = 1; i <= 200; i++) {
    let str = "";

    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (i % 7 === 0) str += "Boom";

    if (str === "") str = i;

    outputStr += `<p>${str}</p>`;
  }

  $("#output").html(outputStr);
}

// Call the function when the page is ready
$(document).ready(function() {
  fizzBuzzBoom();
});