/* Pseudocode BrainStorming:
**None of the buttons are written in the html file, but in the js instead**
Create an array of strings with a related topic
    - save this array as a variable called 'topics' (using superHeroes instead)
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
//api_key=74wQm2acCPuZG1EbjwF3lqomtwdorPe0


// Initial array of movies
var superHeroes = ['Superman', 'Aquaman', 'Spiderman', 'Batman', 'Wonder Woman', 'Thor', 'Hulk', 'Black Panther', 'Iron Man'];

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superHeroes + "&api_key=74wQm2acCPuZG1EbjwF3lqomtwdorPe0&limit=10";

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayHeroInfo() {
    var hero = $(this).attr("hero-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + hero+ "&api_key=74wQm2acCPuZG1EbjwF3lqomtwdorPe0&limit=10";

// Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        var results = response.data;
        // Creating a div to hold the movie
        var heroDiv = $("<div class='hero'>");
        //var heroDiv = $("<div>");
        // Storing the rating data
        var rating = response.rating;
            console.log(response);
        // Creating an element to have the rating displayed
        var pOne = $("<div>").text("Rating: " + rating);
        // Displaying the rating
        heroDiv.append(pOne);
        
        $("#gifs-appear-here").prepend(heroDiv);
            }); 
        };  

//function for diplaying hero data - **GOOD HERE**
function renderButtons() {
    // Deleting the heroes prior to adding new heroes
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons").empty();
    // Looping through the array of heroes
    for (var i = 0; i < superHeroes.length; i++) {
        // Then dynamicaly generating buttons for each hero in the array
        var heroDiv = $("<div>");
        //This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("heroBtn");
        // Adding a data-attribute
        a.attr("hero-name", superHeroes[i]);
        // Providing the initial button text
        a.text(superHeroes[i]);
        // Adding the button to the buttons-view div
        $("#buttons").append(a);
      
        }
    }

    
// This function handles events where a hero button is clicked
$("#add-hero").on("click", function(event) {
    event.preventDefault()
    // This line grabs the input from the textbox
    var hero = $("#input").val().trim();
    // Adding movie from the textbox to our array
    superHeroes.push(hero);
    // Calling renderButtons which handles the processing of our her array
    renderButtons();
    });

// Adding a click event listener to all elements with a class of ""
$(document).on("click", "#add-hero", displayHeroInfo);
    renderButtons();

         
    
        


//Here, All you need to do is creating a function for submit button, so new buttons appear when you search for something. 
     // var a = $("<button>");
      //  a.attr("class", "heroBtn");
       // a.attr("hero-data", $(".input").val());
       // a.text($("#input").val());

        //$("#buttons").append(a);
        

   //function renderButtons(){
  //  $("#buttons").empty(); 
   // for (var i = 0; i < superHeroes.length; i++) {
    //    var a = $("<button>");
     //   a.addClass("hero");
     //   a.attr("hero-data", superHeroes[i]);
     //   a.text(superHeroes[i]);
     //   $("#buttons").append(a);
     //   }
   // }
    
/*
$(document).on("click", function() {
function displayHeroInfo() {
    //Function to display info on the topics by calling an API and retrieving the info 
    var hero = $(this).attr("response-data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + hero + "&api_key=74wQm2acCPuZG1EbjwF3lqomtwdorPe0&limit=10";
    // Creating an AJAX call for the specific hero button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var results = response.data;
        console.log(response);
        // WIth the variable results, we can get the data from jquery library to the response function.
        $("#gifs-appear-here").empty();
        // This clears out where the gifs show after clicking heroBtn.
        for (var i = 0; i < results.length; i++) {
            // Creating a div to hold the hero gifs.
            var heroDiv = $("<div>");
            // Storing the rating data
            var rating = results[i].rating;
            // Creating an element to have the rating displayed
            var pOne = $("<p>").text("Rating: " + rating);
            // Creating an image tag for the gifs
            var heroImage = $("<img>");
            heroImage.attr("src", results[i].images.fixed_height_still.url)
            // I copied this from the class activities
            heroImage.attr({
                "data-state": "still",
                "data-still": results[i].images.fixed_height_still.url,
                "data-animate": results[i].images.fixed_height.url,
                class: "gif"
            }); 
        
                // This gives rating information before the gif image.
                heroDiv.prepend(pOne);
                heroDiv.prepend(heroImage);
                $("#gifs-appear-here").prepend(heroDiv);
            }
         //function to turn static gifs into animated once on clicks//
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
        });
    };
        
$("#submit").on("click", function (event) {
 //the default action of the event will not be triggered.
    event.preventDefault ();
//Here, All you need to do is creating a function for submit button, so new buttons appear when you search for something. 
        var a = $("<button>");
        a.attr("class", "heroBtn btn-primary btn");
        a.attr("character-data", $("#input").val());
        a.text($("#input").val());

        $("#buttons").append(a);
        });

// give the variable attributes that are same as already existing iron man button.  */