var roundScore = 0;


$(document).ready(function() {
  $("#btnRoll1").click(function() {


    var finalScore = 50;
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    if (randomNumber === 1) {
      $('#rolled1').text("You rolled 1. Next player's turn");
      roundScore = 0;
      $("#btnRoll1").attr("disabled",true);


    } else
    if (randomNumber !== 1) {
      roundScore += randomNumber;

    } else if (roundScore > 50) {
      $("#rolled1").text("Winner");
    }
    $('#totalPoints').text(roundScore);
  });
});


  $("#btnHold1").click(function(){
    $('#score-1').text(roundScore);
  });

  var player1 = playerOne;
  var player2 = playerTwo;

  function throwDice() {
    var random = Math.floor((Math.random() * 6) + 1);
    document.getElementById("btnRoll1").innerHTML = random;
  }

  function player(turn) {
    this.roll = 0;
    this.currentScore = 0;
    this.totalPoints = 0;
    this.turn = turn;

    // this.playername;
  }

  /*Create If statement to check the current player
  Ensure that its player one turn every time the game starts
  Disable player 2 controls
  */
  player.prototype.currentPlayer = function() {
    if (playerOne = true) {
    } else {
      playerTwo = true;
    }
  }
  player.prototype.rollOne = function() {
    if (this.roll === 1) {
      this.currentScore = 0;
      alert("Sorry you rolled 1.")
      //When roll is 1 disable player1 controls and activate player 2
    } else {
      this.currentScore += this.roll;
    }
  }

  player.prototype.hold = function() {
    this.totalPoints += this.currentScore;
    this.currentScore = 0;
    alert("Next Players turn")
  }

  player.prototype.winner = function() {
    if (this.totalPoints >= 20) {
      alert("You Won!!");
    }
  }

  // var images =


  $(document).ready(function() {
      $("#btnRoll1").click(function(rollDice) {
        return(random)
      });
      $("#btnRoll2").click(function(rollDice) {
        return(random)
      });

  });
