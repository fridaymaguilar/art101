/*
  lab.js - JS/jQuery script for name sorting and DOM output
  Author: Frida Aguilar 
  Date: May 19 2025 
*/

function sortString(inputString) {


  return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit").click(function() {
  // Get value of input field
  const userName = $("#user-name").val();

  const userNameSorted = sortString(userName);

  // Output the result
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
