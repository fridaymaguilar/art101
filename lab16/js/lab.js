
//Author: Frida Aguilar 
//Created: June 4 2025

let currentComic = 0;

function getAndDisplayComic(num) {
  let url = num ? `https://xkcd.com/${num}/info.0.json` : "https://xkcd.com/info.0.json";
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    success: function(data) {
      currentComic = data.num;
      console.log("Comic loaded:", data);
      $("#output").html(`
        <h3>${data.title}</h3>
        <img src="${data.img}" alt="${data.alt}" title="${data.alt}">
        <p>${data.alt}</p>
      `);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
      $("#output").html("<p>Oops! Something went wrong. Check the console.</p>");
    }
  });
}

$("#prev").click(() => getAndDisplayComic(currentComic - 1));
$("#next").click(() => getAndDisplayComic(currentComic + 1));

// Load latest comic when page loads
$(document).ready(() => {
  getAndDisplayComic();
});
