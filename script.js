'use strict';

//query the numbers of players
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');


// query current scores
let player1CurrentScore = document.getElementById('current--0');
let player2CurrentScore = document.getElementById('current--1');

// Players current scores
let currentScore = 0;

// query total scores
let player1TotalScore = document.getElementById('score--0');
let player2TotalScore = document.getElementById('score--1');

// setplayers score to zero
player1TotalScore.textContent = 0;
player2TotalScore.textContent = 0;

// Players total scores
let pl1ttScore = 0;
let pl2ttScore = 0;

// query image dice
let diceImage = document.querySelector('.dice');

// query roll dice
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');

// winner
const winner = document.querySelector('.player--winner');

// New game
const newGame = document.querySelector('.btn--new');

// Generate random number between 1 to 6
let dice;


// switch player to active player
const switchTo = selector => {
    // console.log(selector);
    selector.classList.add('player--active');
};

// Event to roll dice
rollDice.addEventListener('click', function (event) {
    console.log(event);
    dice = Math.trunc(Math.random() * 6 + 1);          // Random number generated

    // Display dice randomly
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${dice}.png`;
    // console.log(diceImage.src);

    //  variable to hold currvalues

    // //   Add dice value to current value of player one
    if (player1 && player1.classList.contains('player--active')) {
        currentScore += dice;
        // console.log(`Player 1 random number is ${dice} and current score ${currentScore}`);

        if (dice !== 1) {
            player1CurrentScore.textContent = currentScore;
        } else {
            currentScore = 0;
            player1.classList.remove('player--active');
            player1CurrentScore.textContent = currentScore;
            switchTo(player2);
        }

    } else if (player2 && player2.classList.contains('player--active')) {
        currentScore += dice;
        //console.log(`Player 2 random number is ${dice} and current score ${currentScore}`);
        if (dice !== 1) {
            player2CurrentScore.textContent = currentScore;
        } else {
            currentScore = 0;
            player2.classList.remove('player--active');
            player2CurrentScore.textContent = currentScore;
            switchTo(player1);
        }
    }

});


holdDice.addEventListener('click', function () {

    // Check for active player
    if (player1.classList.contains('player--active')) {
        //console.log('Player one is active');
        // Check if current score is > 0
        if (currentScore > 0) {
            pl1ttScore += currentScore;
            console.log(`Player one total score ${pl1ttScore}`)
            player1TotalScore.textContent = pl1ttScore;
            player1.classList.remove('player--active');

            currentScore = 0;           // set the current score to 0 and display
            player1CurrentScore.textContent = currentScore;

            switchTo(player2);
        }

    } else if (player2.classList.contains('player--active')) {
        // console.log('Player two is active');
        if (currentScore > 0) {
            pl2ttScore += currentScore;
            // console.log(`Player one total score ${pl2ttScore}`)
            player2TotalScore.textContent = pl2ttScore;
            player2.classList.remove('player--active');

            currentScore = 0;           // set the current score to 0 and display
            player2CurrentScore.textContent = currentScore;

            switchTo(player1);
        }
    }


    // Check for winner
    if (pl2ttScore >= 100) {
        player2TotalScore.textContent = 100;
        rollDice.disabled = true;
        rollDice.style.cursor = 'not-allowed';
        diceImage.classList.add('hidden');
        player2.classList.add('player--winner');

    } else if (pl1ttScore >= 100) {
        player1TotalScore.textContent = 100;
        rollDice.disabled = true;
        rollDice.style.cursor = 'not-allowed';
        diceImage.classList.add('hidden');
        player1.classList.add('player--winner');
    }

});


// Reseting game
newGame.addEventListener('click', function () {

    // Hidden anything
    diceImage.classList.add('hidden');

    pl1ttScore = pl2ttScore = player1CurrentScore.textContent = player2CurrentScore.textContent = player1TotalScore.textContent = player2TotalScore.textContent = 0;

    rollDice.disabled = false;
    rollDice.style.cursor = 'pointer';

    // Remove active players
    player1.classList.remove('player--active');
    player2.classList.remove('player--active');

    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');


    switchTo(player1);
    // console.log(pl2ttScore, pl1ttScore, currentScore, player2TotalScore)

});







// FROM MY INSTRUCTOR

// Selecting elements
// const player0EL = document.querySelector('.player--0');
// const player1EL = document.querySelector('.player--1');

// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');


// // Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');


// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;


// // Switch player
// const switchPlayer = function () {
//     // Reset current score
//     currentScore = 0;
//     document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

//     // switch from one player to another
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player0EL.classList.toggle('player--active');
//     player1EL.classList.toggle('player--active');
// }

// // Rolling dice functionalitysz
// btnRoll.addEventListener('click', function () {
//     if (playing) {
//         // 1. Generating a random dice roll
//         const dice = Math.trunc(Math.random() * 6) + 1;

//         // 2. Display dice
//         console.log(dice);
//         console.log(diceEl);
//         diceEl.classList.remove('hidden');
//         diceEl.src = `dice-${dice}.png`;


//         // 3. Check for a rolled 1: if true, switch to next player
//         if (dice !== 1) {
//             // Add dice to the current score
//             currentScore += dice;
//             //current0El.textContent = currentScore;      // current score
//             console.log(activePlayer);
//             document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
//             console.log(`Curent score ${currentScore}`);

//         } else {
//             switchPlayer();
//         }
//     } else {
//         btnRoll.style.cursor = 'not-allowed';
//     }

// });


// btnHold.addEventListener('click', function () {

//     if (playing) {
//         // 1. Add current score to active player's score
//         scores[activePlayer] += currentScore;
//         console.log(document.getElementById(`score--${activePlayer}`));
//         document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
//         console.log(scores);

//         // 2. Check if player's score is >= 100
//         if (scores[activePlayer] >= 20) {
//             // Finish the game

//             playing = false;
//             diceEl.classList.add('hidden');

//             document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//             document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');


//         } else {
//             // Switch to the next player
//             switchPlayer();
//         }
//     } else {
//         btnRoll.style.cursor = 'not-allowed';
//     }
// });


// btnNew.addEventListener('click', function () {
//     // Set total scores to 0
//     for (let score = 0; score < scores.length; score++) {
//         scores[score] = 0;
//         document.querySelector(`#score--${score}`).textContent = scores[score];
//     }

//     // set current scores to 0
//     currentScore = 0;
//     console.log(currentScore);
//     console.log(activePlayer);
//     document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

//     // remove winner background and switch active player to 1
//     document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');

//     // Reset active player to 0
//     document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
//     activePlayer = 0;

//     document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

//     // Hide dice
//     diceEl.classList.add('hidden');

//     // Set playing to true
//     playing = true;
//     btnRoll.style.cursor = 'pointer';


// });





