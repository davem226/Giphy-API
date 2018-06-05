// Declare array of initial buttons to be added 
let topics = [
    "Super Mario RPG",
    "Super Mario World",
    "Yoshi's Island",
    "Super Ghouls 'n Ghosts",
    "NHL '94",
    "NFL Quarterback Club",
    "Legend of Zelda: A Link to the Past",
    "Super Mario Kart",
    "Donkey Kong Country",
    "Super Mario All Stars",
    "Mortal Kombat II",
    "Super Metroid",
    "Star Fox",
    "Tecmo Super Bowl",
    "Ken Griffey Jr. Presents Major League Baseball",
];

$(document).ready(function () {
    // Loop through topics array and add initial buttons
    for (i in topics) {
        addButton(topics[i]);
    }

    // On button click...
    $(".button").click(function () {
        // Get gifs specific to button clicked
        showGifs($(this).text(), 10);
    });

    // Add new game...
    $("#add-game").click(function () {
        const gameToAdd = $("#game-to-add").val();
        addButton(gameToAdd);
        $(".button").click(function () {
            showGifs($(this).text(), 10);
        });
    });
});
