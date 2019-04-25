// create an array that lists out all of the options
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// creating variables to hold wins, losses, chances left, and letters guessed
var wins = 0;
var losses = 0;
var chanceLeft = 9;
var lettersGuessed = [];

// variables to hold references to the place text will go
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var chancesLeft = document.getElementById("guesses_left");
var lettersGuessed = document.getElementById("letter_guessed");
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var updateGuessesLeft =function(){
    document.
}

// function for key pressed
document.onkeyup = function(event){

    // determines that a key was pressed
    var userGuess =event.key
}