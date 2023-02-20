// Treasure Hunt Challenge
// Create a new file in the treasure-hunt directory called treasurehunt.js.

// Add a script tag to the bottom of the HTML body so the HTML page knows it has a dependency. Notice there is no innerHTML.

// As a first step to connecting the HTML and JS, create a function called treasure that takes an argument of location and returns an alert displaying the id of the square on the game board when it is clicked on.

// Add an onclick attribute to all the nested table tags so when our user clicks on the question mark it will trigger the treasure function to run in the JavaScript file.

// Add a unique id (numbers 0-8) to all <td></td> tags so we can identify which td was clicked and perform an action on the correct location.

// WITHIN YOUR JS FILE: Set up a variable to store the random location of the rainbow treasure

// WITHIN YOUR JS FILE: Set up a variable to store the random location of the bomb

// WITHIN YOUR FUNCTION: Add a conditional statement that will alert either the location of the bomb, the location of the treasure, or the id. (You may want the "id" alert to tell you the location of the treasure and bomb for troubleshooting purposes)

// WITHIN YOUR FUNCTION: Replace the alert with an action that will change the question mark in the td innerHTML to the tree, bomb, or treasure icon. You can also access an emoji keyboard by clicking fn on a Mac or WindowKey + for a Windows computer.


//Establishes Locations for treasure and bomb.
var treasureLocation = Math.floor(Math.random()*9)
var bombLocation = Math.floor(Math.random()*9)

//Prevents treasure and bomb from being in the same square by changing the location of the bomb.
if (treasureLocation === bombLocation){
        bombLocation = Math.floor(Math.random()*9)
}

function treasureHunt(location){
    //Establishes success condition
    if(treasureLocation === location){
        document.getElementById("results").innerHTML = "You WIN! 🌈"
        document.getElementById("island").innerHTML = ""
    }
    //Establishes loss condition
    else if(bombLocation === location){
        document.getElementById("results").innerHTML = "Sorry, you lose 💣"
        document.getElementById("island").innerHTML = ""
    }
    //Checks for empty spaces
    else if(treasureLocation !== location && bombLocation !== location){
        document.getElementById(location).innerHTML = "🦴"
    }
}