$('#search').on('submit', function(event) {
	event.preventDefault();

	var title = $('#movieTitle').val().trim();
	var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";
	var imdbid;

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	     console.log(response);
	     
	     imdbid = response.imdbID;
	     console.log(imdbid);

	    $.ajax({
        url: "http://imdb.wemakesites.net/api/" + imdbid,
        crossDomain: true,
        dataType: "jsonp",
        success: function(data) {
            window.console.log(data);
        }
	    });


	}); 

	

	// var title2 = 'Aladdin';
	// var queryURL2 = "http://www.omdbapi.com/?t=" + title2 + "&y=&plot=short&r=json";

	// $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	//      console.log(response);

	//      console.log(response.Title)
	// }); 
});