/*
  lab.js - JS/jQuery for UCSC College sorting 
  Author: Frida Aguilar 
  Date: May 21 2025 
*/

function getCollege(num) {
  let remainder = num % 10;
  let str = "";

  if (remainder === 0) {
    str = " You’ve been whisked away to <strong>Cowell College</strong>, where tradition meets introspection beneath redwood canopies.";
  } else if (remainder === 1) {
    str = "The stars align — it’s <strong>Stevenson College</strong> for you, where tales of self and society swirl like coastal fog.";
  } else if (remainder === 2) {
    str = " You spark with innovation! <strong>Crown College</strong> welcomes you to its realm of science, curiosity, and future-thinking magic.";
  } else if (remainder === 3) {
    str = " You are called to <strong>Merrill College</strong>, a vibrant land where cultures converge and voices rise in harmony.";
  } else if (remainder === 4) {
    str = " Ah, the muses have spoken! <strong>Porter College</strong> beckons you to dream boldly and create wildly.";
  } else if (remainder === 5) {
    str = " The wind carries you to <strong>Kresge College</strong>, a forested haven for free spirits and fearless learners.";
  } else if (remainder === 6) {
    str = " With a heart full of justice and soul full of color, you belong in <strong>Oakes College</strong> — where change begins.";
  } else if (remainder === 7) {
    str = " The earth hums your name — <strong>Rachel Carson College</strong> awaits, where the future is green and glowing.";
  } else if (remainder === 8) {
    str = "Through every breeze of curiosity, <strong>College Nine</strong> calls — a portal to global wisdom and shared stories.";
  } else if (remainder === 9) {
    str = " The drumbeat of justice echoes — <strong>College Ten</strong> opens its gates to changemakers and dream-weavers alike.";
  }

  return str;
}

$("#button").click(function(){
  let name = $("#input").val();
  let nameLength = name.length;
  let college = getCollege(nameLength);
  $("#output").html("<p>" + college + "</p>");
});