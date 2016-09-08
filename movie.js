//Variable to hold information on the movies
var movies = {
	movie1: '',
	movie2: ''
}

//When the search form is submitted
$('#search').on('submit', function(event) {
	event.preventDefault();

	var title = $('#movieTitle').val().trim();
    $('#movieTitle').val('');
	var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";
	var imdbid;
	var omdbResponse;

	//Make Ajax call to OMDB
	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	     
		imdbid = response.imdbID;
	    omdbResponse = response;

	     //Make second Ajax call to IMDB API
	    $.ajax({
        url: "http://imdb.wemakesites.net/api/" + imdbid,
        crossDomain: true,
        dataType: "jsonp",
        success: function(data) {
            window.console.log(data);

		    if (movies.movie1 == '') {
			     movies.movie1 = omdbResponse;
			     console.log('Movie 1 added');
			    $('#movieTitle').attr('placeholder','Search for second movie');
			    $('#movie1').append('Title: ' + movies.movie1.Title);
		 	}
		 	else if (movies.movie2 == '') {
			     movies.movie2 = omdbResponse;
			     console.log('Movie 2 added');
			    $('#movie2').append('Title: ' + movies.movie2.Title);
		 	}
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