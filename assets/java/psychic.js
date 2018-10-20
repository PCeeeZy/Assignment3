// game of pyschic
$(document).ready(function() {

    // game involves the computer choosing a random letter of alphabet

    // var letters = [a,b,c,...z]
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // GLOBAL VARIABLES
    var wins = 0;
    var losses = 0;
    var newRound = false;

    // START GAME

    $("#newRound").on("click", function(getLetter) {
        var wrongGuess = 0;
        var randomNumber = Math.floor(Math.random() * letters.length);
        var compLetter = letters[randomNumber];
        console.log(randomNumber);
        console.log(compLetter);
        newRound = true;

    // What happens when you press a key
        document.onkeyup = function(keyInput) {

            // key is pressed and assigned as userGuess
            var userGuess = keyInput.key;
            
            // Win condition
            if (userGuess === compLetter) {
                alert("Way to go! You guessed " + userGuess + " and so did the computer!");
                wins ++;
                // score is updated with a win. Round is over
                $("#winRecord").html(wins);
                alert("Click the new round button to start a new round!");
                newRound = false;
                }
            // Wrong Guess condition
            else {
                wrongGuess ++;
                alert("Wrong!");

                // Loss condition
                if (wrongGuess === 9) {
                    alert("You are not psychic!");
                    losses ++;
                    // tried to get wrong letters to update html side, doesnt work
                    // will return to later
                    // $("#wrongLetters").html.append(keyInput.key);

                    // losses score is updated.  Round is over
                    $("#lossRecord").html(losses);
                    alert("Click the new round button to start a new round!");
                    newRound = false;
                }
            }
        }
    })
})