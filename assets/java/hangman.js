// how to hangman
$(document).ready(function() {

    // top 100 or so movies off imdb
    // some titles were skipped due to wierd syntax
    movies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Schindler's List", "The Lord of the Rings", "The Good, the Bad and the Ugly", "Inception", "Forrest Gump", "Fight Club", "Star Wars", "Goodfellas", "The Matrix", "One Flew Over the Cuckoo's Nest", "Seven Samurai", "Avengers: Infinity War", "Interstellar", "The Silence of the Lambs", "Saving Private Ryan", "The Usual Suspects", "Spirited Away", "City of God", "Life is Beautiful", "It's a Wonderful Life", "The Green Mile", "The Departed", "The Lion King", "Gladiator", "Whiplash", "Back to the Future", "Psycho", "The Prestige", "Alien", "The Intouchables", "Memento", "Raiders of the Lost Ark", "Apocalypse Now", "Terminator", "Once Upon a Time in the West", "American History X", "The Pianist", "Casablanca", "Rear Window", "Dangal", "Grave of the Fireflies", "Cinema Paradiso", "Sunset Boulevard", "Modern Times", "The Great Dictator", "City Lights", "A Star is Born", "The Shining", "Coco", "The Dark Knight Rises", "Once Upon a Time in America", "American Beauty", "Django Unchained", "Aliens", "Braveheart", "Your Name", "Oldboy", "The Lives of Others", "Das Boot", "Wall-E", "Citizen Kane", "Princess Mononoke", "Like Stars on Earth", "M", "Paths of Glory", "Witness for the Prosecution", "My Father and My Son", "Inglourious Basterds", "A Clockwork Orange", "Batman Begins", "Good Will Hunting", "Scarface", "Requiem for a Dream", "Taxi Driver", "Full Metal Jacket", "Eternal Sunshine of the Spotless Mind", "Snatch", "Reservoir Dogs", "Up", "Monty Python and the Holy Grail", "Indiana Jones and the Last Crusade", "Toy Story", "The Hunt", "The Sting", "Amadeus", "Amelie", "LA Confidential", "Vertigo", "To Kill a Mockingbird", "Lawrence of Arabia", "For a Few Dollars More", "Some Like It Hot", "Metropolis", "North by Northwest", "Singin in the Rain", "A Separation", "Double Indemnity", "All About Eve", "The Apartment", "Rashomon", "Children of Heaven", "Bicycle Thieves", "Yojimbo", "Ikiru", "The Kid", "The Treasure of the Sierra Madre", "The Bandit", "The Wolf of Wall Street"];

    // Artists and rock bands all time
    artists = ["The Beatles", "Madonna", "Elton John", "Elvis Presley", "Mariah Carey", "Stevie Wonder", "Janet Jackson", "Michael Jackson", "Whitney Houston", "Rihanna", "The Rolling Stones", "Paul McCartney", "Bee Gees", "Usher", "Chicago", "The Supremes", "Prince", "Rod Stewart", "Drake", "Aretha Franklin", "Marvin Gaye", "Taylor Swift", "Katy Perry", "Phil Collins", "Billy Joel", "Diana Ross", "The Temptations", "Donna Summer", "The Beach Boys", "Lionel Richie", "Bruno Mars", "Neil Diamond", "Carpenters", "The Jacksons",  "Beyonce", "Kenny Rogers", "Barbra Streisand", "Bryan Adams", "Cher", "George Michael", "The Black Eyed Peas", "Pink", "Bobby Vinton", "John Mellencamp", "Gloria Estefan", "Bon Jovi", "Ray Charles", "Foreigner", "Chris Brown", "Duran Duran", "Justin Timberlake", "Commodores", "Eagles", "Lady Gaga", "TLC", "Paul Anka", "Barry Manilow", "Heart", "Nelly", "James Brown", "Paula Abdul", "Eminem", "Alicia Keys", "Kelly Clarkson", "Starship", "Kanye West", "Celine Dion", "Bob Seger", "Fleetwood Mac", "Justin Bieber", "Bruce Springsteen", "John Denver", "Pearl Jam", "Nirvana", "Eddie Vedder", "Metallica", "Bob Dylan", "Queen", "Jimi Hendrix", "Pink Floyd", "The Who", "Neil Young", "David Bowie", "Foo Fighters", "Led Zeppelin", "Red Hot Chili Peppers", "Black Sabbath", "The Doors", "Green Day", "Creedence Clearwater Revival", "Aerosmith", "Ramones", "Lynyrd Skynyrd", "Jefferson Airplane", "Smashing Pumpkins", "Kings of Leon", "Kiss", "The Sex Pistols", "Janis Joplin", "The Clash", "Arcade Fire", "The Strokes", "Soundgarden", "Rage Against the Machine", "Radiohead", "Alice in Chains", "Iggy Pop", "Eric Clapton", "The Killers", "Deep Purple", "ZZ Top", "Nine Inch Nails", "Megadeth", "Joan Jett", "Depeche Mode", "Stone Temple Pilots", "Van Halen", "Tears for Fears", "System of a Down", "Johnny Cash", "Iron Maiden", "Tom Petty", "The White Stripes", "Rush", "Slipknot", "Linkin Park", "Pixies", "The Kinks", "Blondie", "INXS", "Arctic Monkeys", "Weezer", "Oasis", "Blur", "Morrissey", "The Cranberries", "The Black Keys", "Sublime", "The Offspring", "Alice Cooper", "Talking Heads", "Gorillaz", "Carlos Santana", "Queens of the Stone Age", "Sting", "Eagles", "Boston", "The Cure", "Franz Ferdinand", "Bush"];

    // WORLD CAPITALS!!!
    capitals = ["Kabul", "Tirana", "Algiers", "Andorra la Vella", "Luanda", "Saint Johns", "Buenos Aires", "Yerevan", "Canberra", "Vienna", "Baku", "Nassau", "Manama", "Dhaka", "Bridgetown", "Minsk", "Brussels", "Belmoran", "Porto Novo", "Thimphu", "Sucre", "Sarajevo", "Gaborone", "Brasilia", "Bandar Seri Begawan", "Sofia", "Ouagadougou", "Bujumbura", "Praia", "Phnom Penh", "Yaounde", "Ottawa", "Bangui", "Ndjamena", "Santiago", "Beijing", "Bogota", "Moroni", "Kinshasa", "San Jose", "Yamoussoukro", "Zagreb", "Havana", "Nicosia", "Prague", "Copenhagen", "Djibouti", "Roseau", "Santo Domingo", "Quito", "Cairo", "San Salvador", "Malabo", "Asmara", "Tallinn", "Addis Ababa", "Palikir", "Suva", "Helsinki", "Paris", "Libreville", "Banjul", "Tbilisi", "Berlin", "Accra", "Athens", "Saint Georges", "Guatemala City", "Conakry", "Bissau", "Georgetown", "Port Au Prince", "Tegucigalpa", "Budapest", "Reykjavik", "New Delhi", "Jakarta", "Tehran", "Baghdad", "Dublin", "Jerusalem", "Rome", "Kingston", "Tokyo", "Amman", "Astana", "Nairobi", "South Tarawa", "Pristina", "Kuwait City", "Bishkek", "Vientiane", "Riga", "Beirut", "Maseru", "Monrovia", "Tripoli", "Vaduz", "Vilnius", "Luxemburg", "Skopje", "Antananarivo", "Lilongwe", "Kuala Lumpur", "Male", "Bamako", "Valleta", "Majuro", "Nouakchott", "Port Louis", "Mexico City", "Chisinau", "Monaco", "Ulaanbaatar", "Podgorica", "Rabat", "Maputo", "Nay Pyi Taw", "Windhoek", "Yaren District", "Kathmandu", "Amsterdamn", "Wellington", "Managua", "Niamey", "Abuja", "Pyongyang", "Oslo", "Muscat", "Islamabad", "Ngerulmud", "Jerusalem", "Panama City", "Port Moresby", "Asuncion", "Lima", "Manila", "Warsaw", "Lisbon", "Doha", "Brazzaville", "Bucharest", "Moscow", "Kigali", "Basseterre", "Castries", "Kingstown", "Apia", "San Marino", "Sao Tome", "Riyadh", "Dakar", "Belgrade", "Victoria", "Freetown", "Singapore", "Bratislava", "Ljubljana", "Honaira", "Mogadishu", "Bloemfontein", "Cape Town", "Seoul", "Juba", "Madrid", "Colombo", "Khartoum", "Paramaribo", "Mbabane", "Stockholm", "Bern", "Damascus", "Dushanbe", "Dodoma", "Bangkok", "Dili", "Lome", "Nukualofa", "Port of Spain", "Tunis", "Ankara", "Ashgabat", "Funafuti", "Kampala", "Kiev", "Abu Dhabi", "London", "Washington DC", "Montevideo", "Tashkent", "Port Vila", "Vatican City", "Caracas", "Hanoi", "Sanaa", "Lusaka", "Harare"];

    // TEST REALM.  SMALL ARRAY TO CREATE WORKING CONDITIONS with Strange Syntax
    testRealm = ["baby", "baby driver", "it's baby driver", "baby & driver"];

    // *******************************End of Arrays********************************************


    // ******************************Some useful Variables*************************************

    // so comp chooses word.  i then create a for loop that takes word and for the length of  (word)string.length? each letter is placed into wordArray that contains ["e", "x", "a", "m", "p", "l", "e"] as well as an underscoreArray that is ["_", "_", "_", "_", "_", "_", ]


    // variables needed:
    // Wins=0
    var wins = 0;

    // losses=0
    var losses = 0;

    // remainingWrong-----incorrect guesses remaining----Start at 8
    var remainingWrong = 8;

    // compWord---is set to be a string and converts all letters to uppercase.
    var compWord = "";
    var userGuess = ""

    // userWord---used to compare against compWord.
    var userWord = "";
    // IF compWord is === to userWord we have win state. wins++. also turn gameState back to false
    // IF wrongLetters === 0, we have loss state.  losses++.  also turn gameState back to false


    var wordArray = [];
    // var underSArray = function(operationUnderscore) {
    //     for ( k = 0 ; k < wordArray.length; k++) {
    //         underSArray[k].push(wordArray[k]);
    //         underSArray[k].replace(/[^a-zA-Z]/g,'-');
    //     }
    // };
    // console.log(underSArray);


    // wordArray[]----Is the compWord indexed out individually by letter

    // underSArray[]-----at same time. IF -space- put -space- ELSE put _
    // this array is also responsible for displaying onscreen.


    // Gamestarting variable.  Game can begin upon gamestate = true
    var gameState = false;




    // ******************************Buttons to begin game*********************************

    // Hiding Gameplay Buttons in Beginning
    $(".topicChoice").hide("fast", function(){
    });
    $(".lettersAreButtons").hide("fast", function(){
    });

    // Upon Starting game, hide start button, show topics
    $("#startGame").on("click", function(showTopics) {
        $(".topicChoice").show("fast", function(){});
        $("#startGame").hide("fast", function(){});
    });
    
    // After Choosing Topic, hide topics and display letters buttons
    $(".topicChoice").on("click", function(showLetters) {
        $(".lettersAreButtons").show("slow", function(){});
        $(".topicChoice").hide("fast", function(){});
    });

    // Click Movies button and computer chooses movie
    $("#movies").on("click", function(getMovies) {
        var randomNumber = Math.floor(Math.random() * movies.length);
        var compWord = movies[randomNumber];
        console.log(compWord);
        // for loop---for every letter in compWord 
        for ( j = 0; j < compWord.length; j++ ) {
            wordArray.push(compWord[j]);
        };
        console.log(wordArray);
    });

    // Click artists button and computer chooses movie
    $("#artists").on("click", function(getArtists) {
        var randomNumber = Math.floor(Math.random() * artists.length);
        var compWord = artists[randomNumber];
        console.log(compWord);
        // for loop---for every letter in compWord 
        for ( j = 0; j < compWord.length; j++ ) {
            wordArray.push(compWord[j]);
        };
        console.log(wordArray);  
    });

    // Click artists button and computer chooses movie
    $("#capitals").on("click", function(getCapitals) {
        var randomNumber = Math.floor(Math.random() * capitals.length);
        var compWord = capitals[randomNumber];
        console.log(compWord);
        // for loop---for every letter in compWord 
        for ( j = 0; j < compWord.length; j++ ) {
            wordArray.push(compWord[j]);
        };
        console.log(wordArray);
    });

    // Click test realm and computer chooses testword
    $("#testRealm").on("click", function(getTest) {
        var randomNumber = Math.floor(Math.random() * testRealm.length);
        var compWord = testRealm[randomNumber];
        console.log(compWord);
        // for loop---for every letter in compWord 
        for ( j = 0; j < compWord.length; j++ ) {
            wordArray.push(compWord[j]);
        };
        console.log(wordArray);  
    });
    
    // Buttons are Letters Array
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // For-loop to iterate through the letters array.
    for ( i = 0; i < letters.length; i++ ) {
      var letterBtn = $("<button>");
      letterBtn.addClass("letterChoiceButtons");
      letterBtn.attr("data-letter", letters[i]) ;
      letterBtn.text(letters[i]);
      $(".lettersAreButtons").append(letterBtn);
    };

    // *****************GAME HAS BEGUN***************************

    // This is supposed to convert any letters from wordArray to underSArray
    var underSArray = function(operationUnderscore) {
        for ( k = 0 ; k < wordArray.length; k++) {
            underSArray[k].push(wordArray[k]);
            underSArray[k].replace(/[^a-zA-Z]/g,'-');
            
        }
    };
    console.log(underSArray);
    // Then we want to display the underSArray in div class="wordLengthDisplay"
    // $(".wordLengthDisplay").text(underSArray)

    // We need to have way to input letter to check against wordArray that has been changed to all UPPER CASE

    // we can do this by having an on click event of the button
    // each button has a text value already established---this is the attribute data-letter
    // $(".letterChoiceButtons").on("click", function {
        // FOR loop to check all indexes of wordArray against data-letter

        // IF data-letter === wordArray[i] then
        // replace underSArray[i] with data-letter;
        // ELSE remainingWrong --;

    // IF wordArray === underSArray
        // then game is won!---- wins++;
        // game is reset---Hide all buttons but start;
        // return remainingWrong to 8
        // clear gametime arrays
    
    // IF remainingWrong === 0
        // then game is lost!>>>>>losses--;
        // game is reset---Hide all buttons but start;
        // return remainingWrong to 8;
        // clear gametime arrays




    // })




});

// *************RIP CODE*******Failed and semifailed attempts************************
//     // Display _____ for each letter
//     for ( var i = 0; i < gameWord.length; i++ ) {
//         if (string.charAt(gameWord[i]) === (" ")) {
//             $(".wordLengthDisplay").append(" ");
//         }
//         else {
//         $(".wordLengthDisplay").append("_");
//         }
//     }
    
// });

    // // for loop---for every letter in compWord 
    // for ( j = 0; j < compWord.length; j++ ) {
    //     wordArray.push(compWord[j]);
    //     console.log(wordArray);
        

    // };
    // console.log(wordArray);