/*
  lab.js - Uses jQuery to toggle styles on sections

  Author: Frida Aguilar 
  Date: May 12 2025 
*/

const poemLines = [
  "My toes felt soft in the wet soil,",
  "my chest, light.",
  "It had already been the start of a great morning—",
  "almost like I was on top of the world.",
  "I looked around my green forest",
  "and there it was:",
  "the herb my mom taught me to pick for soup.",
  "I hurried over, thanking the plant as I did.",
  "The jars jingled softly in my bag.",
  "Pleased with myself, I skipped home,",
  "snacking on chapulines I had packed.",
  "My hut wasn’t extravagant—",
  "just a little home connected to a cave.",
  "A skunk claimed one of my chairs,",
  "and the stove sparked to life with flint.",
  "By the end of an hour, the soup was done.",
  "Just as I lifted the spoon, I heard rustling.",
  "I scratched my horn. Listened. Waited.",
  "A crash. A small 'oof.'",
  "A girl tangled in vines. Face-down.",
  "'Hi,' she said, popping her head up.",
  "Part elf, maybe?",
  "I waved the vines away with my hand.",
  "'You okay?' I asked, softly.",
  "She stood—freckles, cropped hair, a limp.",
  "She said she was hiding from hunters.",
  "'Ah,' I said. 'We should go inside.'",
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
