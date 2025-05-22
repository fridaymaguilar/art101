/*
  lab.js - JS/jQuery script for name sorting and DOM output
  Author: Frida Aguilar 
  Date: May 19 2025 
*/

// sortingHat function returns a house based on name length % 4
function sortingCollege(str) {
  const colleges = [
    "Cowell",
    "Stevenson",
    "Crown",
    "Merrill",
    "Porter",
    "Kresge",
    "Oakes",
    "Rachel Carson",
    "College Nine",
    "College Ten"
  ];
  
  const index = str.length % colleges.length;
  return colleges[index];
}

// click listener
$("#button").click(function() {
  const name = $("#input").val();
  const college = sortingCollege(name);
  $("#output").append("<p>The UCSC Sorting Quiz has placed you in <strong>" + college + " College</strong>!</p>");
});
