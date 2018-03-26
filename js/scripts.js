$(document).ready(function(){

  $("text").submit(function(event) {
  var favorites = ["fmovies", "author", "place", "painter"];
  favorites.forEach(function(favorites){
    favorites [1]
    favorites[0]
    favorites[3]

  });

  blanks.forEach(function(blank) {
    var userInput = $("input" + blank).val();
      $("." + blank).text(userInput);
  });

  $("text").show();

  event.preventDefault();
  });
});
  // var fthings = [];
  // fthings.push("Raindrops on Roses")
  // fthings;[]
