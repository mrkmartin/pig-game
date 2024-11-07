'use strict';

//Selecting elements
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const player1Score = document.getElementById('score--1');
const player2Score = document.getElementById('score--2');
const currentScore1 = document.getElementById('current--1');
const currentScore2 = document.getElementById('current--2');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
player1Score.textContent = 0;
player2Score.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 1;

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `img/dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
});
