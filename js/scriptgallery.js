const imagine = $(".imagine")
const nume = $(".nume")
$(document).ready(function() {
    // Make an AJAX request to the API endpoint
    $.ajax({
      url: 'https://randomuser.me/api/',
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        // Handle the successful response
        $("#imagine").attr("src", response.results[0].picture.large);
        $(".nume").text(response.results[0].name.first + " " + response.results[0].name.last);
      },
      error: function(error) {
        // Handle errors
        console.log('Error:', error);
      }
    });
  });
