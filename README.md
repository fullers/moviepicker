# Movie Picker

Search for two movie titles, based on the searches it will return info about the respective movies. Based on the metascore, rating, and number of votes the application will make a recommendation of which movie to watch.

## Screenshots
![Alt text](/images/screenshot1.png?raw=true "Movie Picker Search and Logo")
![Alt text](/images/screenshot2.png?raw=true "Optional Title")

## Technologies used
- HTML and CSS
- Javascript, JQuery 
- Skeleton (Responsive CSS)
- API (OMDB, imdb JSON)

## Getting Started

### Prerequisities

## Running the tests

## Built With

* Sublime Text
* Adobe Photoshop

## Walk throughs of code

The movie.js file includes all the Javascript, Jquery, and ajax calls (in a function called moviesearch). 
,,,
function movieSearch() {
	//If two movies have not already been chosen
	if (movies.movie1 == '' || movies.movie2 == '') {

		//If search field isn't empty
		if ($('#movieTitle').val() !== '') {

			var title = $('#movieTitle').val().trim();

			//Clear the search input
			$('#movieTitle').val('');

			//If there's already a movie1, check to make sure it isn't the same as the current search term
			if (movies.movie1.Title && movies.movie1.Title.toLowerCase() == title.toLowerCase()) {
				console.log('Can\'t compare the same movie!');
				$('#modal-bg').fadeIn();
				$('#modal-message').html('You\'ve aleady searched for that movie!');
			}
			//If there's already a movie2, check to make sure it isn't the same as the current search term
			else if (movies.movie2.Title && movies.movie2.Title.toLowerCase() == title.toLowerCase()) {
				console.log('Can\'t compare the same movie!');
				$('#modal-bg').fadeIn();
				$('#modal-message').html('You\'ve aleady searched for that movie!');
			}
			....
,,,

## Authors

* **Shaun** - *Javascript, Research, Presentation* - [Shaun](https://github.com/fullers)

* **Cherish** - *Javascript, UI/UX, CSS* - [Cherish](https://github.com/nckhang)

* **Tatiana** - *HTML/CSS, Research* - [Tatiana](https://github.com/tsg1204)

## License
   
   None

## Acknowledgments
