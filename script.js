'use strict';

//Selecting elements
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
player1Score.textContent = 0;
player2Score.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `img/dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    currentScore1.textContent = currentScore;
  } else {
    currentScore = 0;
    currentScore1.textContent = currentScore;
  }
});
