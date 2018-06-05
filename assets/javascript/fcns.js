
// Add button
function addButton(text) {
    // Create and store button element
    let newButton = $("<button>");

    // Add button class
    newButton.attr("class", "button");

    // Append new button to buttons div
    $("#buttons").append(newButton);

    // Add text to button
    newButton.text(text);
}

// Get and display gifs
function showGifs(searchTerm, gifLim) {
    // Declare search term variables
    const apiKey = "BhgAymCSg69DDtOaeVMMlZgZ731eIfPB";
    const query = searchTerm;
    const limit = gifLim;

    // Concatenate query URL
    const URL = "https://api.giphy.com/v1/gifs/search?q=" +
        query + "&api_key=" +
        apiKey + "&limit=" +
        limit;

    // Make API request
    $.ajax({
        url: URL,
        method: "GET"
    }).then(function (apiRes) {
        // console.log(apiRes);
        // Display gifs
        displayGifs(apiRes);
    });
}

// Display gifs in html
function displayGifs(resObject) {
    // Get data array from api results
    const resArr = resObject.data;

    // Loop through data array
    for (i in resArr) {
        // Get still and animated gif urls
        const pausedURL = resArr[i].images.fixed_height_still.url;
        const playURL = resArr[i].images.fixed_height.url;

        // Create new img tag, add gif url to src, add alt attribute
        let gifImage = $("<img>");
        gifImage.attr("src", pausedURL);
        gifImage.attr("alt", "classic SNES gif");
        gifImage.attr("class", "image")
        gifImage.attr("paused-url", pausedURL);
        gifImage.attr("play-url", playURL);

        // Get gif rating put in new div with class rating
        const gifRating = "Rating: " + resArr[i].rating;
        let ratingDiv = $("<div>");
        ratingDiv.text(gifRating);
        ratingDiv.attr("class", "rating");

        // Append gif image and rating to a new gif div with class gif
        let gifDiv = $("<div>");
        gifDiv.attr("class", "gif");
        $(gifDiv).append(gifImage, ratingDiv);


        // Prepend gif and rating to gifs div
        $("#display-area").prepend(gifDiv);

        // Give gifs state attribute to allow for toggling
        let state = "paused";
        gifImage.attr("state", state);
    }

    // Create onclick function for each gif
    $(".image").click(function () {
        // If gif is paused, switch to play, else switch to paused
        let state = $(this).attr("state");
        const pausedURL = $(this).attr("paused-url");
        const playURL = $(this).attr("play-url")
        if (state === "paused") {
            $(this).attr("src", playURL);
            state = "play";
            $(this).attr("state", state);
        } else {
            $(this).attr("src", pausedURL);
            state = "paused";
            $(this).attr("state", state);
        }

    });
}