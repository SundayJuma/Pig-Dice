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
