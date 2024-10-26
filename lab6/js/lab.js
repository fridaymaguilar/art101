// index.js - purpose and description here
// / Author: Frida Aguilar 
// Date: October 24 2024 
// lisence: Public Domain 
//

// Define Variables
var myTransport = ["Ford Explorer ", "Bike ", "Bus ", "Walking "];

// Create an object for main ride
var myMainRide = {
  make: "Ford ",
  model: "Explorer ",
  color: "Red",
  year: 1995,

  age : function() {
    return 2022 - this.year;
  }
}

// Output 
document.write("Kind of transportation I use:", myTransport, "</br>");
document.write("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null,'\t'), "</pre>");

console.log("Here is a message") 