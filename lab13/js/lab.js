//  Author: Frida Aguilar 
  Date: May 20 2025 
*/

function sortingHat(str) {
  const length = str.length;
  const mod = length % 4;
  let house = "";

  if (mod === 0) {
    house = "Gryffindor";
  } else if (mod === 1) {
    house = "Ravenclaw";
  } else if (mod === 2) {
    house = "Hufflepuff";
  } else {
    house = "Slytherin";
  }

  return house;
}

$("#button").click(function() {
  const name = $("#input").val();
  const house = sortingHat(name);
  $("#output").append("<p>The Sorting Hat has sorted you into <strong>" + house + "</strong>!</p>");
});