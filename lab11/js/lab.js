/*
  lab.js - JS/jQuery script for name sorting and DOM output
  Author: [Your Name]
  Date: 5/19/2025
  Requirements: jQuery
*/

// Sorts the characters of a string in alphabetical order
function sortString(inputString) {
  // Convert string to array, sort it, then rejoin
  return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit").click(function() {
  // Get value of input field
  const userName = $("#user-name").val();

  // Sort the string
  const userNameSorted = sortString(userName);

  // Output the result
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
