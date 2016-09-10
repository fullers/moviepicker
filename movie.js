// -----------------------------------------------------------
// Global Variables
// -----------------------------------------------------------

var movies = {
	movie1: '',
	movie2: ''
}
var omdbResponse;

// -----------------------------------------------------------
// Functions/Actions
// -----------------------------------------------------------

//When the search form is submitted
$('#search').on('submit', function(event) {
	event.preventDefault();

	var title = $('#movieTitle').val().trim();
	$('#movieTitle').val('');
	var queryURL = "http://www.omdbapi.com/?t=" + title + "&plot=short&r=json";
	var imdbid;

	//Make Ajax call to OMDB
	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		imdbid = response.imdbID;
		omdbResponse = response;
		console.log('OMDB response added');

		//Make second Ajax call to IMDB API
		$.ajax({
		url: "http://imdb.wemakesites.net/api/" + imdbid,
		crossDomain: true,
		dataType: "jsonp",
		success: function(response) {
			console.log('IMDB response added');

			if (response.status == 'success') {	

				if (movies.movie1 == '') {
					movies.movie1 = omdbResponse;

					//Empty movie1 div
					$('#movie1').empty();

					//Hide movie1 div
					$('#movie1').hide();

					var btnClose = $('<i>');
					btnClose.attr('class', 'fa fa-times');
					btnClose.attr('area-hidden', 'true');
					btnClose.attr('id', 'remove-movie1');
					$('#movie1').append(btnClose);
					
					var poster = $('<img>')
					poster.attr('src',omdbResponse.Poster);
					poster.attr('class','movie-poster');
					poster.attr('id','movie1-poster');					
					$('#movie1').append(poster);
					$('#movie1').append('<h2>' + movies.movie1.Title + '</h2>');

					var table = $('<table>');
					table.attr('class','u-full-width');
					table.attr('id','movie1-table');
					$('#movie1').append(table);

					$('table#movie1-table').append('<tr><td>Year</td><td>' + movies.movie1.Year + '</td></tr>');
					$('table#movie1-table').append('<tr><td>Rating</td><td>' + movies.movie1.Rated + '</td></tr>');
					$('table#movie1-table').append('<tr><td>Actors</td><td>' + movies.movie1.Actors + '</td></tr>');
					$('table#movie1-table').append('<tr><td>Metascore</td><td>' + movies.movie1.Metascore + '</td></tr>');
					$('table#movie1-table').append('<tr><td>IMDb Rating</td><td>' + movies.movie1.imdbRating + '</td></tr>');
					$('table#movie1-table').append('<tr><td>Plot</td><td>' + movies.movie1.Plot + '</td></tr>');

					//Fade in movie1 div
					$('#movie1').fadeIn();
				}
				else if (movies.movie2 == '') {
					movies.movie2 = omdbResponse;

					//Empty movie2 div
					$('#movie2').empty();

					//Hide movie2 div
					$('#movie2').hide();

					var btnClose = $('<i>');
					btnClose.attr('class', 'fa fa-times');
					btnClose.attr('area-hidden', 'true');
					btnClose.attr('id', 'remove-movie2');
					$('#movie2').append(btnClose);

					var poster = $('<img>')
					poster.attr('src',omdbResponse.Poster);
					poster.attr('class','movie-poster');
					poster.attr('id','movie2-poster');
					$('#movie2').append(poster);
					$('#movie2').append('<h2>' + movies.movie2.Title + '</h2>');
					$( "#remove-movie2" ).show();

					var table = $('<table>');
					table.attr('class','u-full-width');
					table.attr('id','movie2-table');
					$('#movie2').append(table);

					$('table#movie2-table').append('<tr><td>Year</td><td>' + movies.movie2.Year + '</td></tr>');
					$('table#movie2-table').append('<tr><td>Rating</td><td>' + movies.movie2.Rated + '</td></tr>');
					$('table#movie2-table').append('<tr><td>Actors</td><td>' + movies.movie2.Actors + '</td></tr>');
					$('table#movie2-table').append('<tr><td>Metascore</td><td>' + movies.movie2.Metascore + '</td></tr>');
					$('table#movie2-table').append('<tr><td>IMDb Rating</td><td>' + movies.movie2.imdbRating + '</td></tr>');
					$('table#movie2-table').append('<tr><td>Plot</td><td>' + movies.movie2.Plot + '</td></tr>');

					//Fade in movie2 div
					$('#movie2').fadeIn();
				}

				//Check to see if there are two movies selected
				if (movies.movie1 !== '' && movies.movie2 !== '') {
					console.log('two movies!');
				}
			}
			else console.log('Response failed!');
		}
		});
	}); 

});

//Show 'loading' message when Ajax call is being run
$( document ).ajaxStart(function() {
	$('#loading').show();
});

//Hide 'loading' message when Ajax call is finished running
$( document ).ajaxStop(function() {
	$('#loading').hide();
});

//On-click function to remove movie 1
$(document).on('click', '#remove-movie1', function() {
	$('#movie1').fadeOut();
	setTimeout(function () {
		$('#movie1').empty();
	},450);
	movies.movie1 = '';
});

//On-click function to remove movie 2
$(document).on('click', '#remove-movie2', function() {
	$('#movie2').fadeOut();
	setTimeout(function() {
		$('#movie2').empty();
	},450);
	movies.movie2 = '';
});