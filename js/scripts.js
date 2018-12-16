// function rollDice = (rollDice(){
//
//   // var rSide = document.getElementById('rSide');
//   // var lSide = document.getElementById('lSide');
//   // var totalPoints = document.getElementById('rSidePoints');
//   // var totalPoints = document.getElementById('lSidePoints');
// //   var die = [];
// //    die = math.ceil(math.random() * 6 );
// //   // var die2 = math.ceil(math.random() * 6 );
// //   // var totalRight = die1
// //   // var totalLeft = die2
// //   // die1.innerHTML = die1;
// //   // die2.innerHTML = die2;
// //   // totalpoints.innerHTML = totalLeft + ".";
// //   // totalpoints.innerHTML = totalRight + ".";
// // document.getElementById('btnRoll').html = die
// // });
// // function holdDice() {
// //   var hold =
//
// var die, players, roll, score, points;
// die = math.ceil(math.random() * 6 );
// player = ["player1", "player2"];
// score = (die++);
// points = (score++);
// });

$(function(){
    var score, totalPoints, activePlayer,PlayGame;

init();
// initialize functions using init();

$('.rollDice').click(function() {
    if(playGame) {
      var dice = Math.ceil(Math.random()*6);

   $('.dice').attr('src','imgs/dice-' + dice + '.png');

   if (dice !== 1) {
       totalPoints += dice;
       $('#btnScore-' + activePlayer).text(totalPoints);
   } else {
       //otherPlayer i.e player-2
       nextPlayer();
   }
    }

});

$('.holdDice').click(function(){
    if(playGame){
        score[activePlayer] += totalPoints;

        $('#score-' + activePlayer).text(score[activePlayer]);

        // Check 4 winner
        if (score[activePlayer] >= 100) {
            $('#player-' + activePlayer).text('Winner!!');

            playGame = false;
        }else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    };
    totalPoints = 0;
    $('#score-1').text('0');
    $('#score-2').text('0');

    $('#player-1').toggleClass('active');
    $('#player-2').toggleClass('active');

  };

});
