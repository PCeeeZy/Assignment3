// game of pyschic
$(document).ready(function() {

    // game involves the computer choosing a random letter of alphabet

    // var letters = [a,b,c,...z]
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randomNumber = Math.floor(Math.random() * letters.length) + 1;
    console.log(randomNumber);

    // random floor number chooses index of letters array---well call this chosenLetter

    var compLetter = letters[randomNumber];
    console.log(compLetter);
    
    var wrongGuess = 0;
    var wins = 0;
    var losses = 0;

    // using event.onkeyup = guessedLetter

    document.onkeyup = function(keyInput) {

        // Determines which key was pressed.
        var userGuess = keyInput.key;

        if (userGuess !== compLetter) {
            wrongGuess ++;
            alert("Wrong!");
            if (wrongGuess >= "9") {
                alert("You are not psychic!");
                losses ++;
                $("#lossRecord").html(losses);
                
            }
        }
        else {
            alert("Way to go! You guessed " + userGuess + " and so did the computer!");
            wins ++;
            $("#winRecord").html(wins);
        }
    }
})


