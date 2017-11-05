$("#submit-animal").on("click", function() {

// Pull the giphy API
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=oM3BUOSenZ2VJomaFilz2gaTGRKk7P8C&tag=nick+cage";

// perform and AJAX GET request to our queryURL
$.ajax({
  url: queryURL,
  method: "GET"
})
.done(function(response){
console.log(response)
var imageUrl = response.data.fixed_height_downsampled_url;

var gifImage = $('<img>');

gifImage.attr("src", imageUrl);
gifImage.attr("alt", "gif image");

$(".results").prepend(gifImage);
      })
  })