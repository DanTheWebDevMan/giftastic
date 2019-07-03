/* Pseudocode BrainStorming:

**None of the buttons are written in the html file, but in the js instead**

Create an array of strings with a related topic
    - save this array as a variable called 'topics'
    - Have each index show up as a preloaded button on the page
        **look at cat button class activity
        **look at movie search class activity
If you click on a button, it'll give you 10 static gifs related to that button
    - if gif is clicked on, it becomes animated and stops when clicked again
    -every gif will have its rating underneath
If you search and submit, a new button with the searched word will appear as an option
Add a form to your page that takes a value from a user input box and adds it to your `topics` array. 
Make a function call that takes each topic in the array and remakes the buttons on the page
*/
//api_key=IuM0FUtnwPlmGFo5LEjZDY9pompEDW0z

// list of superheroes that will be loaded at start of page

    var topics = ['Superman', 'Aquaman', 'Spiderman', 'Batman', 'Wonder Woman', 'Thor', 'Hulk', 'Black Panther', 'Iron Man'];

    //Function to display info on the topics by calling an API and retrieving the info 
    function displayTopicData() {
        var superHeroes = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=IuM0FUtnwPlmGFo5LEjZDY9pompEDW0z&q=" + topics + '&limit=10&offset=0&rating=G&lang=en'
    }

    $.ajax({
		url: queryURL, 
		method: "GET"
	}).done(function(response) {
		//sets the Length for the next loop
		var results = response.data;
		//Clear Previous images
		$("#heroes").empty();
		// Create For Loop here to show multiple Giphy Responses
		for (var i = 0; i < results.length; i++) {
            // storing rating data in rating variable
            var rating = response.data[i].rating;

    

    };

    });