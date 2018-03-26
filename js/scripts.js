$(document).ready(function(){

  $(".list").submit(function(event) {
  event.preventDefault();
  var favThings =[] ;
  var favMovies= $("#favMovies").val();
  var favAuthor= $("#favAuthor").val();
  var favAnimal= $("#favAnimal").val();
  var favFood= $("#favFood").val();

  favThings.push(favMovies);
  favThings.push(favAuthor);
  favThings.push(favAnimal);
  favThings.push(favFood);
  alert(favThings);

  // $("#el1").text(function() {
  //   return favThings[1];
  // })
  for(let i = 0; i < favThings.length; i ++){
    let element = favThings[i];
    $("ul").append('<li>'+element+'</li>')
  }
  $(".answer-list").show()
  });
})


  // blanks.forEach(function(blank) {
  //   var userInput = $("input" + blank).val();
  //     $("." + blank).text(userInput);
  // });
  //
  // $("text").show();

//     event.preventDefault();
//   });
// });
  // var favThings = [];
  // favThings.push("Raindrops on Roses")
  // favThings;[]
