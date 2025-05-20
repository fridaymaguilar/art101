/*
  lab.js - Uses jQuery to toggle styles on sections

  Author: Frida Aguilar 
  Date: May 12 2025 
*/

const poemLines = [
  "My toes felt soft in the wet soil,",
  "my chest, light.",
  "almost like I was on top of the world.",
  "I looked around my green forest",
  "and there it was:",
  "the herb my mom taught me to pick for soup.",
  "I hurried over, thanking the plant as I did.",
  "The jars jingled softly in my bag.",
  "Pleased with myself, I skipped home,",
  "snacking on chapulines I had packed.",
  "just a little home connected to a cave.",
  "A skunk claimed one of my chairs,",
  "and the stove sparked to life with flint.",
  "By the end of an hour, the soup was done.",
  "Just as I lifted the spoon, I heard rustling.",
  "I scratched my horn. Listened. Waited.",
  "She stood—freckles, cropped hair, a limp.",
  "'Want some soup?'",
  "Pluck. Pluck. Pluck.",
  "The door burst open.",
  "Something screeched—",
  "And tackled me. Hard."
];

// Click to show a random poetic line
$("#make-convo").click(function() {
  const randomIndex = Math.floor(Math.random() * poemLines.length);
  const line = poemLines[randomIndex];
  $("#output").append('<div class="text"><p>' + line + '</p></div>');
});
