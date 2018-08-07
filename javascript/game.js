var targetNumber = ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];
var computerGuess = targetNumber[Math.floor(Math.random()*102)+19];

$("#number-to-guess").text(computerGuess);

var wins = 0;
var losses = 0;
var counter = 0;
var numberOptions = ["1", "2", "3", "4", "5", "6", "7"];
var diamondValue = numberOptions [Math.floor(Math.random()*7)+1];
var rubyValue = numberOptions [Math.floor(Math.random()*7)+1];
var sapphireValue = numberOptions [Math.floor(Math.random()*7)+1];
var topazValue = numberOptions [Math.floor(Math.random()*7)+1];

var imageDiamond = $("<img>");
imageDiamond.addClass("diamond-image");
imageDiamond.attr("src", "https://www.jewelrynotes.com/jn/wp-content/uploads/2012/10/diamond-white-300x300.jpg");
imageDiamond.attr("data-diamondvalue", diamondValue);
$("#diamond").append(imageDiamond);

//reset function attempt
function restart (result) {
    if (result) {
        var computerGuess = targetNumber[Math.floor(Math.random()*102)+19];
        var diamondValue = numberOptions [Math.floor(Math.random()*7)+1];
    }
}

$(".diamond-image").on("click", function() {
    var diamondValue = ($(this).attr("data-diamondvalue"));
        diamondValue = parseInt(diamondValue);
        counter+=diamondValue;
        $("#current-score").text(counter);

    if (counter === targetNumber) {
      alert("You win!");
      wins++
      restart(true);
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++
      restart(true);
    }
});


// the diamond works but haven't yet figured out why the same/similar code wouldn't work for the other crystals

// var imageRuby = $("<img>");
//     imageRuby.addClass("ruby-image");
//     imageRuby.attr("src", "https://blog.udemy.com/wp-content/uploads/2014/04/shutterstock_122289685-300x300.jpg");
//     imageRuby.attr("data-rubyvalue", numberOptions[i]);
//     $("#ruby").append(imageRuby);

// $(".ruby-image").on("click", function() {
//     var rubyValue = ($(this).attr("data-rubyvalue"));
//     rubyValue = parseInt(rubyValue);
//     counter+=rubyValue;

//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//       alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//       alert("You lose!!");
//     }
// });


//Displaying the score using innerHTML attempt

// var html =
//     "<p>Current Score: " + counter + "</p>" +
//     "<p>Wins: " + wins + "</p>" +
//     "<p>Losses: " + losses + "</p>" +

// document.querySelector("#game").innerHTML = html;