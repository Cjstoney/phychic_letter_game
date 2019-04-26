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
var chancesLeftText = document.getElementById("guesses_left");
var lettersGuessedText = document.getElementById("letter_guessed");
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//function for computer generated random number 
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

// function for key pressed
document.onkeydown = function(event){
    chanceLeft--;
    var userGuess =event.key;

    lettersGuessed.push(userGuess);
    lettersGuessedText.textContent ="Letters Guessed: " + lettersGuessed.toString();


    if(chanceLeft > 0 ){
        if(userGuess === computerGuess){
            wins++;
            winsText.textContent = "Wins: " + wins;
           
        }
        else{
            losses++;
            chancesLeftText.textContent = "Guesses Left: " + chanceLeft;
            lossesText.textContent = "Losses: " + losses;
            

        }
    }
    
}