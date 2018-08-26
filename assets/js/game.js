(document).ready(function() {
    var random = Math.floor(Math.random() * 101 + 19)
    // random generated number displayed at the start of each game
    // number is between 19-120

    $("#randomNumber").text(random);

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)
    // random numbers for each crystal, random number has to be between 1-12


    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $("#playerWins").text(wins);
    $("#playerLosses").text(losses);

function reset () {
    random = Math.floor(Math.random() * 101 + 19);
    console.log(random)
    
    $("#randomNumber").text(random);

    num1 = Math.floor(Math.random() * 11 + 1);
      num2 = Math.floor(Math.random() * 11 + 1);
      num3 = Math.floor(Math.random() * 11 + 1);
      num4 = Math.floor(Math.random() * 11 + 1);
      userScore = 0;

      $("#userScore").text(userScore);
}

function win(){
    alert("You Win!");
    wins++;
    $("#playerWins").text(wins);
    reset();
}

function lose(){
    alert("You Lose..");
    losses++;
    $("#playerLosses").text(losses);
    reset();
}

$("#one").on("click", function (){
    userScore = userScore + num1;

    if (userScore === random){
        win();
    }
    else if (userScore > random){
        lose();
    }
})

})


// Didnt finish coding the rest of the buttons for the crystals.
// Also couldn't get it to work, not sure what i'm missing/over looking.