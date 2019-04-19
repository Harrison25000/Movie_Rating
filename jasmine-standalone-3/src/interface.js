$(document).ready(function() {
  var apicall = new ApiCall();

  document.getElementById("searchfilm").addEventListener("submit", function(event){
      //Stops the form submitting.
      event.preventDefault();

      //Do the checks here.
      console.log(event)
      var film = event.target[0].value

         $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(film) + '&apikey=78eae46').then(function(response){
           $('#moviescoreIMDB').text("")
           $('#moviescoreRT').text("")
           $('#moviescoreMC').text("")
           $('img').attr('src');
           console.log(response.imdbID)
           var title = response.Title
           var score = response.Ratings
           var plot = response.Plot
           var imdbvotes = response.imdbVotes
           var poster = response.Poster
           var imdbID = response.imdbID
           $('#movietitle').text(title)
           $('#movieplot').text(plot)
           $('img').attr('src', poster);

           console.log('https://www.imdb.com/title/' + imdbID + '/?ref_=fn_al_tt_1')

           if (score.length === 1)
            {$('#moviescoreIMDB').text(score[0].Source + " Score: " + score[0].Value + " Votes:" + imdbvotes)}
           else if (score.length === 2)
            {$('#moviescoreIMDB').text(score[0].Source + " Score: " + score[0].Value + " Votes:" + imdbvotes)
             $('#moviescoreRT').text(score[1].Source + " " + score[1].Value)}
           else if (score.length === 3)
             {$('#moviescoreIMDB').text(score[0].Source + " Score: " + score[0].Value + " Votes:" + imdbvotes)
             $('#moviescoreRT').text(score[1].Source + " Score: " + score[1].Value)
             $('#moviescoreMC').text(score[2].Source + " Score: " + score[2].Value)}
           else
             {$('#moviescoreIMDB').text('No Score')};

             $("#image").wrap($('<a>',{
               href: 'https://www.imdb.com/title/' + imdbID + '/?ref_=fn_al_tt_1'
             }));
           });
       });


  document.getElementById("searchfilm").addEventListener("submit", function(event){

    event.preventDefault();

    //Do the checks here.
    var film = event.target[0].value

    $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(film) + '&apikey=78eae46').then(function(response){
      $('#harrisonscore').text('')
      $('#harrisondiv').text('Harrison Score:')
      console.log(response)
      var score = response.Ratings

      if (score.length === 2 && score[0].Source === "Internet Movie Database" && score[1].Source === "Rotten Tomatoes")
      {var IMDBscore = Number(score[0].Value[0] + score[0].Value[2])
        console.log(score[1].Value.length)
        if (score[1].Value.length === 4)
        {var RTscore = Number(score[1].Value[0] + score[1].Value[1] + score[1].Value[2])}
        else
        {var RTscore = Number(score[1].Value[0] + score[1].Value[1])};
        $('#harrisonscore').text(Math.round(((IMDBscore + RTscore) / 200) * 100)+"%")}
      else if (score.length === 2 && score[0].Source === "Internet Movie Database" && score[1].Source === "Metacritic")
      {var IMDBscore = Number(score[0].Value[0] + score[0].Value[2]);
        if (score[1].Value.length === 7)
        {var MCscore = Number(score[1].Value[0] + score[1].Value[1] + score[1].Value[2])}
        else
        {var MCscore = Number(score[1].Value[0] + score[1].Value[1])};
        $('#harrisonscore').text(Math.round(((IMDBscore + MCscore) / 200) * 100)+"%")}
      else if (score.length === 2 && score[0].Source === "Rotten Tomatoes" && score[1].Source === "Metacritic")
        {var RTscore = Number(score[0].Value[0] + score[0].Value[1]);
          var MCscore = Number(score[1].Value[0] + score[1].Value[1]);
          $('#harrisonscore').text(Math.round(((RTscore + MCscore)/200) * 100)+"%")}
      else if (score.length === 3)
      {var IMDBscore = Number(score[0].Value[0] + score[0].Value[2]);
        var RTscore = Number(score[1].Value[0] + score[1].Value[1]);
        var MCscore = Number(score[2].Value[0] + score[2].Value[1]);
        $('#harrisonscore').text(Math.round(((IMDBscore + RTscore + MCscore) / 300) * 100)+"%")}
      else if (score.length === 1)
      {$('#harrisonscore').text(score[0].Source + " " + score[0].Value)}
      else {$('#harrisonscore').text('No Harrison Score')};



      //Sends the form.
    });
  });





});
