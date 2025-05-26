// Author: Frida Aguilar 
// May 26 2025 
// 

function runFizzBuzzBoom() {
 let max = parseInt($("#max").val());
 let factors = [];

 $(".factor").each(function(index) {
   let factorVal = parseInt($(this).val());
   let wordVal = $(".word").eq(index).val();
   if (!isNaN(factorVal) && wordVal) {
     factors.push({ factor: factorVal, word: wordVal });
   }
 });

 let output = "";

 for (let i = 0; i <= max; i++) {
   let str = "";

   factors.forEach(obj => {
     if (i % obj.factor === 0) {
       str += obj.word;
     }
   });

   if (str === "") str = i;

   output += `<p>${str}!</p>`;
 }

 $("#output").html(output);
}

$(document).ready(function() {
 $("#run").click(runFizzBuzzBoom);
});