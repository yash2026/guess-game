'use strict';

// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const display = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  display('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '10rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When no input
  if (!guess) {
    display('😒 No Number!');
  }
  // when player wins
  else if (guess === secretNumber) {
    display('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is greater or lower
  else if (guess !== secretNumber) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '🤏 Too Low!';

      display(guess > secretNumber ? '📈 Too High!' : '🤏 Too Low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🥲 You lost the game!';
      display('🥲 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // // when guess is low
  // else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '🤏 Too Low!';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥲 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
