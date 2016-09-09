//Variable to hold information on the movies
var movies = {
	movie1: '',
	movie2: ''
}
var omdbResponse;

function displayMovieInfo(number) {
};

//When the search form is submitted
$('#search').on('submit', function(event) {
	event.preventDefault();

	var title = $('#movieTitle').val().trim();
    $('#movieTitle').val('');
	var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";
	var imdbid;

	//Make Ajax call to OMDB
	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	     
		imdbid = response.imdbID;
	    omdbResponse = response;

	     //Make second Ajax call to IMDB API
	    $.ajax({
        url: "http://imdb.wemakesites.net/api/" + imdbid,
        crossDomain: true,
        dataType: "jsonp",
        success: function(response) {
            console.log(response);

            if (response.status == 'success') {
			    if (movies.movie1 == '') {
				    movies.movie1 = omdbResponse;
				    $('#movie1').empty();
				    $('#movie1').append('<h2>' + movies.movie1.Title + '</h2>');
				    
				    poster = $('<img>')
				    poster.attr('src',omdbResponse.Poster);
				    poster.attr('class','movie-poster');
				    poster.attr('id','movie1-poster');
				    $('#movie1').append(poster);
			 	}
			 	else if (movies.movie2 == '') {
				    movies.movie2 = omdbResponse;
				    $('#movie2').empty();
				    $('#movie2').append('<h2>' + movies.movie2.Title + '</h2>');
				    
				    poster = $('<img>')
				    poster.attr('src',omdbResponse.Poster);
				    poster.attr('class','movie-poster');
				    poster.attr('id','movie2-poster');
				    $('#movie2').append(poster);
			 	}
			}
			else console.log('Response failed!');
        }
	    });
	}); 

});

//Show 'loading' message when Ajax call is being run
$( document ).ajaxStart(function() {
    $( "#loading" ).show();
});

//Hide 'loading' message when Ajax call is finished running
$( document ).ajaxStop(function() {
    $( "#loading" ).hide();
});