/*
  lab.js - JS/jQuery for UCSC College sorting 
  Author: Frida Aguilar 
  Date: May 21 2025 
*/

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
