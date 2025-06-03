// Author: Frida Aguilar
// Date: June 2, 2025
// Purpose: Fetch data using AJAX from the yesno.wtf API and display it

$("#activate").click(function() {
  console.log("Button clicked!");

  $.ajax({
    url: "https://yesno.wtf/api",
    type: "GET",
    dataType: "json",
    success: function(data) {
      console.log("Success:", data);
      $("#output").html(`
        <p>Answer: <strong>${data.answer.toUpperCase()}</strong></p>
        <img src="${data.image}" alt="${data.answer}" />
      `);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
      $("#output").html(`<p>Something went wrong: ${textStatus}</p>`);
    }
  });
});