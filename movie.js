var movies = {
	movie1: '',
	movie2: ''
}

$('#search').on('submit', function(event) {
	event.preventDefault();

	var title = $('#movieTitle').val().trim();
    $('#movieTitle').val('');
	var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";
	var imdbid;

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	     console.log(response);
	     
	     imdbid = response.imdbID;
	     console.log(imdbid);

	     if (movies.movie1 == '') {
		     movies.movie1 = response;
		     console.log('Movie 1 added');
		     console.log(movies.movie1);
		    $('#movieTitle').attr('placeholder','Search for second movie');
	 	}
	 	else if (movies.movie2 == '') {
		     movies.movie2 = response;
		     console.log('Movie 2 added');
		     console.log(movies.movie2);
	 	}

	    $.ajax({
        url: "http://imdb.wemakesites.net/api/" + imdbid,
        crossDomain: true,
        dataType: "jsonp",
        success: function(data) {
            window.console.log(data);
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