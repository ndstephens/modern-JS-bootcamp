import Hangman from './hangman';
import getPuzzle from './requests';

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

const render = () => {
  puzzleEl.innerHTML = game1.puzzle
    .split('')
    .map((letter) => {
      return `<span>${letter}</span>`;
    })
    .join('');

  guessesEl.textContent = game1.statusMessage;
};

const startGame = async (params) => {
  const puzzle = await getPuzzle('2');
  game1 = new Hangman(puzzle, 5);
  render();

  console.log(`THE PUZZLE IS: ${puzzle}`);
};

//* the 'keypress' event listens for characters, not modifiers
window.addEventListener('keypress', (e) => {
  game1.makeGuess(e.key);
  render();
});

document.querySelector('#reset').addEventListener('click', startGame);

startGame();
