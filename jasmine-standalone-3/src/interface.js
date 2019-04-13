$(document).ready(function() {
  var apicall = new ApiCall();

  document.getElementById("searchfilm").addEventListener("submit", function(event){
      //Stops the form submitting.
      event.preventDefault();

      //Do the checks here.
      console.log(event)
       var film = event.target[0].value
       console.log(film)

         $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(film) + '&apikey=78eae46').then(function(response){
           $('#moviescoreIMDB').text("")
           $('#moviescoreRT').text("")
           $('#moviescoreMC').text("")
           var title = response.Title
           var score = response.Ratings
           var plot = response.Plot
           var imdbvotes = response.imdbVotes
           var poster = response.Poster
           $('#movietitle').text(title)
           $('#movieplot').text(plot)
           $('img').attr('src', poster);
           if (score.length === 1)
            {$('#moviescoreIMDB').text(score[0].Source + " Score: " + score[0].Value + " Votes:" + imdbvotes)}
           else if (score.length === 2)
            {$('#moviescoreIMDB').text(score[0].Source + " Score: " + score[0].Value + " Votes:" + imdbvotes)
             $('#moviescoreRT').text(score[1].Source + " " + score[1].Value)}
           else if (score.length === 3)
             {$('#moviescoreIMDB').text(score[0].Source + " Score: " + score[0].Value + " Votes:" + imdbvotes)
             $('#moviescoreRT').text(score[1].Source + " Score: " + score[1].Value)
             $('#moviescoreMC').text(score[2].Source + " Score: " + score[2].Value)}
           else {$('#moviescoreIMDB').text('no score')};
         });

      //Sends the form.
    });





});
