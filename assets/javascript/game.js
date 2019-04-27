// create an array that lists out all of the options
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// creating variables to hold wins, losses, chances left, and letters guessed
var wins = 0;
var losses = 0;
var chanceLeft = 10;
var lettersGuessed = [];
var psychicGuess = computerGuess()

// variables to hold references to the place text will go
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var chancesLeftText = document.getElementById("guesses_left");
var lettersGuessedText = document.getElementById("letter_guessed");


//function for computer generated random number 
function reset(){
    chanceLeft=10;
    lettersGuessed= [];
    console.log("reset")
}

function computerGuess(){ 
    console.log("message")
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
};

console.log(psychicGuess);

// function for key pressed
document.onkeydown = function(event){
    var userGuess = event.key;

    if(chanceLeft > 0 ){
        lettersGuessedText.textContent ="Letters Guessed: " + lettersGuessed.toString();
        

        if(userGuess === psychicGuess){
            wins++;
            winsText.textContent = "Wins: " + wins;  
            psychicGuess = computerGuess();
            console.log(psychicGuess);
            reset();
        }
        else{
            chanceLeft--;
            chancesLeftText.textContent = "Guesses Left: " + chanceLeft;
            lossesText.textContent = "Losses: " + losses;
            lettersGuessed.push(userGuess);
            
        }
    }
    else{
        losses++;
        lossesText.textContent = "Losses: " + losses;
        reset();
        psychicGuess = computerGuess();
        console.log(psychicGuess); 
    }
   
}