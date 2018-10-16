// game of pyschic
$(document).ready(function() {

    // game involves the computer choosing a random letter of alphabet

    // var letters = [a,b,c,...z]
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // random number chosen
    var randomNumber = Math.floor(Math.random() * letters.length) + 1;
    console.log(randomNumber);

    // number chosen and computer's letter is assigned
    var compLetter = letters[randomNumber];
    console.log(compLetter);
    
    // GLOBAL VARIABLES
    var wrongGuess = 0;
    var wins = 0;
    var losses = 0;

    // What happens when you press a key?
    document.onkeyup = function(keyInput) {

        // key is pressed and assigned as userGuess
        var userGuess = keyInput.key;

        // if statement.  This is a wrong guess
        if (userGuess !== compLetter) {
            wrongGuess ++;
            alert("Wrong!");

            // too many wrong guesses and the score is updated to reflect a loss.
            if (wrongGuess >= "9") {
                alert("You are not psychic!");
                losses ++;
                $("#lossRecord").html(losses);
            }
        }
        // if you guess right
        else {
            alert("Way to go! You guessed " + userGuess + " and so did the computer!");
            wins ++;
            // score is updated with a win.
            $("#winRecord").html(wins);
        }
    })

// How do I start a new round? I've tried putting following code in the win/loss conditions to no avail.

//         var randomNumber = Math.floor(Math.random() * letters.length) + 1;
//         console.log(randomNumber);
    
//         var compLetter = letters[randomNumber];
//         console.log(compLetter);

//     }
// })


