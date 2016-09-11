// -----------------------------------------------------------
// Global Variables
// -----------------------------------------------------------

var movies = {
	movie1: '',
	movie2: ''
}
var score1; //Score variable for movie 1
var score2; //Score varriable for movie 2

// -----------------------------------------------------------
// Functions/Actions
// -----------------------------------------------------------
   	var modalEl = document.getElementById('modal');
    var modalInst = new Modal(modalEl, {

    // active class set to modal when it opens
    activeClass: 'modal--active', 

    // active class set to body when modal opens
    bodyClass: 'modal-is-active', 

    // adds overlay to modal
    overlay: true, 

    // class for overlay of modal
    overlayClass: 'modal__overlay', 
      openCallback: function() {

      	$('.modal_content').append("Could not find the result.");
        console.log('Callback for when Modal is open.');
      },
      closeCallback: function() {
        console.log('Callback for when Modal is closed.');
      }
    });
    modalInst.init();

//When the search form is submitted
$('#search').on('submit', function(event) {
	event.preventDefault();

	//If search field isn't empty
	if ($('#movieTitle').val() !== '') {

		var title = $('#movieTitle').val().trim();
		$('#movieTitle').val('');
		var queryURL = "http://www.omdbapi.com/?t=" + title + "&plot=short&r=json";
		var imdbid;
		var omdbResponse;

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
				console.log('Review: '+ response.data.review);
				//console.log('Review Rating: '+response.data.review.rating);

				if (response.status == 'success') {	

					if (movies.movie1 == '') {
						movies.movie1 = omdbResponse;

						//Hide movie1 div
						$('#movie1').hide();

						//Add removal button
						var btnClose = $('<i>');
						btnClose.attr('class', 'fa fa-times removal-button');
						btnClose.attr('area-hidden', 'true');
						btnClose.attr('id', 'remove-movie1');
						btnClose.attr('title', 'Remove movie');
						$('#movie1').append(btnClose);

						//Add movie poster
						var poster = $('<img>')
						if (omdbResponse.Poster == 'N/A') {
							poster.attr('src','images/no-poster.jpg');
						}
						else {
							poster.attr('src',omdbResponse.Poster);
						}
						poster.attr('class','movie-poster');
						poster.attr('id','movie1-poster');
						$('#movie1').append(poster);

						//Add movie title
						$('#movie1').append('<h2>' + movies.movie1.Title + '</h2>');

						//Add table for the movie info
						var table = $('<table>');
						table.attr('class','u-full-width');
						table.attr('id','movie1-table');
						$('#movie1').append(table);

						//Add movie info to table
						if (movies.movie1.Year !== 'N/A') {
							$('table#movie1-table').append('<tr><td>Year</td><td>' + movies.movie1.Year + '</td></tr>');
						}
						if (movies.movie1.Rated !== 'N/A') {
							$('table#movie1-table').append('<tr><td>Rating</td><td>' + movies.movie1.Rated + '</td></tr>');
						}
						if (movies.movie1.Actors !== 'N/A') {
							$('table#movie1-table').append('<tr><td>Actors</td><td>' + movies.movie1.Actors + '</td></tr>');
						}
						if (movies.movie1.Genre !== 'N/A') {
							$('table#movie1-table').append('<tr><td>Genre</td><td>' + movies.movie1.Genre + '</td></tr>');
						}
						if (movies.movie1.Metascore !== 'N/A') {
							$('table#movie1-table').append('<tr><td>Metascore</td><td>' + movies.movie1.Metascore + '</td></tr>');
						} else {
							$('table#movie1-table').append('<tr><td>Metascore</td><td>' + '0' + '</td></tr>');
						}
						if (movies.movie1.imdbRating !== 'N/A') {
							$('table#movie1-table').append('<tr><td>IMDb Rating</td><td>' + movies.movie1.imdbRating + '</td></tr>');
						} else {
							$('table#movie1-table').append('<tr><td>IMDb Rating</td><td>'+'0'+'</td></tr>');
						}
						if (movies.movie1.Plot !== 'N/A') {
							$('table#movie1-table').append('<tr><td>Plot</td><td>' + movies.movie1.Plot + '</td></tr>');
						}
						if (response.data.review === null) {
							return false;
						}
						if (response.data.review !== null || response.data.review.rating !== null) {
							$('table#movie1-table').append('<tr><td>Review</td><td>' + response.data.review.rating + '</td></tr>');
							
						} else if(response.data.review === null || response.data.review.rating === null) {
							$('table#movie1-table').append('<tr><td>Review</td><td></td></tr>');
						}
						if (response.data.review.text !== null) {
							$('table#movie1-table').append('<tr><td></td><td>' + response.data.review.text + '</td></tr>');
						}

						//Fade in movie1 div
						$('#movie1').fadeIn();
						}
						else if (movies.movie2 == '') {
							movies.movie2 = omdbResponse;

						//Hide movie2 div
						$('#movie2').hide();

						//Add removal button
						var btnClose = $('<i>');
						btnClose.attr('class', 'fa fa-times removal-button');
						btnClose.attr('area-hidden', 'true');
						btnClose.attr('id', 'remove-movie2');
						btnClose.attr('title', 'Remove movie');
						$('#movie2').append(btnClose);

						//Add movie poster
						var poster = $('<img>')
						if (omdbResponse.Poster == 'N/A') {
							poster.attr('src','images/no-poster.jpg');
						}
						else {
							poster.attr('src',omdbResponse.Poster);
						}
						poster.attr('class','movie-poster');
						poster.attr('id','movie2-poster');
						$('#movie2').append(poster);

						//Add movie title
						$('#movie2').append('<h2>' + movies.movie2.Title + '</h2>');

						//Add table for the movie info
						var table = $('<table>');
						table.attr('class','u-full-width');
						table.attr('id','movie2-table');
						$('#movie2').append(table);

						//Add movie info to table
						if (movies.movie2.Year !== 'N/A') {
							$('table#movie2-table').append('<tr><td>Year</td><td>' + movies.movie2.Year + '</td></tr>');
						}
						if (movies.movie2.Rated !== 'N/A') {
							$('table#movie2-table').append('<tr><td>Rating</td><td>' + movies.movie2.Rated + '</td></tr>');
						}
						if (movies.movie2.Actors !== 'N/A') {
							$('table#movie2-table').append('<tr><td>Actors</td><td>' + movies.movie2.Actors + '</td></tr>');
						}
						if (movies.movie2.Genre !== 'N/A') {
							$('table#movie2-table').append('<tr><td>Genre</td><td>' + movies.movie2.Genre + '</td></tr>');
						}
						if (movies.movie2.Metascore !== 'N/A') {
							$('table#movie2-table').append('<tr><td>Metascore</td><td>' + movies.movie2.Metascore + '</td></tr>');
						} else {
							$('table#movie2-table').append('<tr><td>Metascore</td><td>' + '0' + '</td></tr>');
						}
						if (movies.movie2.imdbRating !== 'N/A') {
							$('table#movie2-table').append('<tr><td>IMDb Rating</td><td>' + movies.movie2.imdbRating + '</td></tr>');
						} else {
							$('table#movie2-table').append('<tr><td>IMDb Rating</td>'+'0'+'<td></td></tr>');
						}
						if (movies.movie2.Plot !== 'N/A') {
							$('table#movie2-table').append('<tr><td>Plot</td><td>' + movies.movie2.Plot + '</td></tr>');
						}
						if (response.data.review === null) {
							return false;
						}
						if (response.data.review !== null || response.data.review.rating !== null) {
							$('table#movie2-table').append('<tr><td>Review</td><td>' + response.data.review.rating + '</td></tr>');
			
						} else if(response.data.review === null || response.data.review.rating === null) {
							$('table#movie2-table').append('<tr><td>Review</td><td></td></tr>');
						}
						if (response.data.review.text !== null) {
							
							$('table#movie2-table').append('<tr><td></td><td>' + response.data.review.text + '</td></tr>');
						}

						//Fade in movie2 div
						$('#movie2').fadeIn();
					}

					//Scroll to search input after movie info is added to page
					$('body').animate({
						scrollTop: $("#search").offset().top - 20
					}, 400);

					//Check to see if there are two movies selected
					if (movies.movie1 !== '' && movies.movie2 !== '') {
						console.log('two movies!');

						//Calculate score for movie 1
						if (movies.movie1.Metascore !== 'N/A')
							meta1 = movies.movie1.Metascore * .1;
						else
							meta1 = 0;

						if (movies.movie1.imdbRating !== 'N/A')
							rating1 = parseInt(movies.movie1.imdbRating);
						else
							rating1 = 0;

						if (movies.movie1.imdbVotes !== 'N/A')
							votes1 = parseInt(movies.movie1.imdbVotes) * .01;
						else
							votes1 = 0;
						if (movies.movie1.Runtime !== 'N/A')
							runtime1 = movies.movie1.Runtime.replace(' min','') * .1;
						else
							runtime1 = 0;

						score1 = (((meta1 + rating1) * 2) + votes1 + runtime1).toFixed(1);
						// score1 = score1.toFixed(1)
						console.log('Score 1: ' + score1);

						//calculate score for movie 2
						if (movies.movie2.Metascore !== 'N/A')
							meta2 = movies.movie2.Metascore * .1;
						else
							meta2 = 0;

						if (movies.movie2.imdbRating !== 'N/A')
							rating2 = parseInt(movies.movie2.imdbRating);
						else
							rating2 = 0;
						
						if (movies.movie2.imdbVotes !== 'N/A')
							votes2 = parseInt(movies.movie2.imdbVotes) * .01;
						else
							votes2 = 0;
						if (movies.movie2.Runtime !== 'N/A')
							runtime2 = movies.movie2.Runtime.replace(' min','') * .1;
						else
							runtime2 = 0;

						score2 = (((meta2 + rating2) * 2) + votes2 + runtime2).toFixed(1);
						console.log('Score 2: ' + score2);

						//display calculated score and algorithm description

						if (score1 > score2) {
							$('#scoreResult').append('<p>Based on the score ' + score1 + ' we recommend ' + movies.movie1.Title + '</p>');

						}
						else if (score2 > score1) {
							console.log('Movie 2 win');
							$('#scoreResult').append('<p>Based on the score ' + score2 + ' we recommend ' + movies.movie2.Title + '</p>');
						}
						else {
							console.log('Tie!');
							$('#scoreResult').append('<p>Based on the scores the movies are tied.</p>');
						}
		   
					}
				}
				else {
					console.log('Response failed!');
				$('#messageModal').modal('show').append('Response Failed');
				} 
			}
			});
		}); 
	}
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
	$('#scoreResult').empty();
});

//On-click function to remove movie 2
$(document).on('click', '#remove-movie2', function() {
	$('#movie2').fadeOut();
	setTimeout(function() {
		$('#movie2').empty();
	},450);
	movies.movie2 = '';
	$('#scoreResult').empty();
});