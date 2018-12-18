var player1 = playerOne;
var player2 = playerTwo;

var throwDice = function() {
  var random = Math.floor((Math.random() * 6) + 1);
  return (random);
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
    this.turn = turn;
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

    $("#btnRoll").click(function(rollDice) {;
    });

  )
};
