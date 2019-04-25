
var attempt= 0;


var chances = 0;
var maxTries= 9;
// generate random letter and store for later
function randLetter(){ 
    var letterList= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letterList[Math.floor(Math.random()* letterList.length)];
     console.log(letter)
}

randLetter()

// check to see if the letter is correct
while (attempt !== randLetter()) {
    var attempt= prompt("please use the keyboard to pick a letter");
    chances  += 1; 

    if (chances > maxTries) {
        breakdocument.write("You have run out of chances. Computer wins");
        break
    }
}
// If the number is incorrect, prompt the user to guess again. Repeat until the user guesses the letter or runs out of chances.

// If the user guesses the correct letter, Tell them the winning letter and thank them form playing

// program complete
