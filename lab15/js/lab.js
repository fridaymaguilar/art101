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

const playlistId = '0syfCV3pBzv4MCLAa0dMls';

<iframe
  title="Spotify Embed: Recommendation Playlist"
  src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
  width="100%"
  height="100%"
  style={{ minHeight: '360px' }}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>