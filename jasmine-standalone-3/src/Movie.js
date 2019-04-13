function ApiCall() {
  this.test = 0
};

ApiCall.prototype.apistuff = function(film){
  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(film) + '&apikey=78eae46').then(function(response){
    // console.log(response)
    // Ratings[0].Source   or Ratings[0].Value
    console.log(response)
    var title = response.Title
    var score = response.Ratings
    var plot = response.Plot
    console.log(title)
    console.log(score)
    console.log(plot)
  });
};
