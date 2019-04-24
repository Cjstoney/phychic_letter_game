// generate random letter
function randLetter(){
    var letterList= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letterList[Math.floor(Math.random()* letterList.length)];
     console.log(letter)
}

randLetter();
// capture user keystrokecd ../
document.onkeyup = function(event){
    var userGuess= event.key;
}

// compare user keystroke to computer generated lettter

// if the letter matches, alert that the user wins and add one to the win column
if (randLetter === userGuess){
    alert("User Wins")
}
// else add the user selected letter to the letters guessed section and take awayone chance

// if all the chances are used, alert that computer wins and reset the game