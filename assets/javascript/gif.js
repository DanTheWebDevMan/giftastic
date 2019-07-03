/* Pseudocode BrainStorming:

**None of the buttons are written in the html file, but in the js instead**

Create an array of strings with a related topic
    - save this array as a variable called 'topics'
    - Have each index show up as a preloaded button on the page
        **look at cat button class activity
        **look at movie search class activity
If you click on a button, it'll give you 10 static gifs related to that button
    - if gif is clicked on, it becomes animated and stops when clicked again
    - every gif will have its rating underneath
If you search and submit, a new button with the searched word will appear as an option
Add a form to your page that takes a value from a user input box and adds it to your `topics` array. 
Make a function call that takes each topic in the array and remakes the buttons on the page
*/
//api_key=IuM0FUtnwPlmGFo5LEjZDY9pompEDW0z

// list of superheroes that will be loaded at start of page

    var topics = ['Superman', 'Aquaman', 'Spiderman', 'Batman', 'Wonder Woman', 'Thor', 'Hulk', 'Black Panther', 'Iron Man'];

    //Function to display info on the topics by calling an API and retrieving the info 
    function displayHeroData() {
        var superHeroes = $(this).attr("data-name");
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topics + '&api_key=IuM0FUtnwPlmGFo5LEjZDY9pompEDW0z&limit=10';
    }

    $.ajax({
		url: queryURL, 
		method: "GET"
	}).then(function(response) {
        // Creating an AJAX call for the specific hero button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            // Creating a div to hold the hero
            var heroDiv = $("<div class='hero'>");
            // Storing the rating data
            var rating = response.data[i].rating;
            // Creating an element to have the rating displayed
            var pOne = $("<p>").text("Rating: " + rating);
            // Displaying the rating
            heroDiv.append(pOne);
            // Appending the image
            heroDiv.append(image);
        })
  
        // Function for displaying hero data
        function renderButtons() {
  
          // Deleting the heroes prior to adding new heroes
          // (this is necessary otherwise you will have repeat buttons)
          $("#buttons-view").empty();
  
          // Looping through the array of movies
          for (var i = 0; i < topics.length; i++) {
  
            // Then dynamicaly generating buttons for each hero in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class of hero-btn to our button
            a.addClass("hero-btn");
            // Adding a data-attribute
            a.attr("data-name", topics[i]);
            // Providing the initial button text
            a.text(topics[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
          }
        }
        // This function handles events where a hero button is clicked
        $("#add-hero").on("click", function(event) {
          event.preventDefault();
          // This line grabs the input from the textbox
          var movie = $("#hero-input").val().trim();
  
          // Adding hero from the textbox to our array
          topics.push(superHeroes);
  
          // Calling renderButtons which handles the processing of our hero array
          renderButtons();
        });
  
        // Adding a click event listener to all elements with a class of "movie-btn"
        $(document).on("click", ".hero-btn", displayHeroData);
  
        // Calling the renderButtons function to display the intial buttons
        renderButtons();
    });
    
    // function to turn static gis into animated once on clicks//
    $(".gif").on("click", function() {
        //Check if the variable state is equal to 'still',
      // then update the src attribute of this image to it's data-animate value,
      // and update the data-state attribute to 'animate'.
        var state = $(this).attr("data-state");
        if(state === "still") {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr("data-state", "still");
          }
        });