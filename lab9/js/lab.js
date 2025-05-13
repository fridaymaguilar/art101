/*
  lab.js - Uses jQuery to toggle styles on sections

  Author: Frida Aguilar 
  Date: May 12 2025 
*/
// Add button to the challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// Add button to the problems section
$("#problems").append("<button id='button-problems'>Make Special</button>");

// Add button to the results section
$("#results").append("<button id='button-results'>Make Special</button>");

// Add click listener for challenge button
$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});

// Add click listener for problems button
$("#button-problems").click(function(){
  $("#problems").toggleClass("special");
});

// Add click listener for results button
$("#button-results").click(function(){
  $("#results").toggleClass("special");
}); 

