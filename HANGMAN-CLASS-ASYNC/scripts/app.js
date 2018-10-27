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
  const puzzle = await getPuzzleAsync('2');
  console.log(`THE PUZZLE IS: ${puzzle}`);
  game1 = new Hangman(puzzle, 5);
  render();
};

//* the 'keypress' event listens for characters, not modifiers
window.addEventListener('keypress', (e) => {
  game1.makeGuess(e.key);
  render();
});

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

//
//
//? ------ DIFFERENT WAYS OF CREATING THE getPuzzle() FUNCTION -------
//
//

//* CALLBACKS

//* we give 'getPuzzle' a callback as its second argument which will be called within 'getPuzzle' when the AJAX request in 'getPuzzle' resolves to either an error or returned data

//* the callback is a function which defines what we do with the data after it's received

getPuzzleCB('3', (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    // console.log(`Callback: ${puzzle}`);
  }
});

//* PROMISES
getPuzzlePromise('2').then(
  //* the 'resolve' function, which accepts the transferred data and does something with it
  (puzzle) => {
    // console.log(`Promise: ${puzzle}`);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);

//* FETCH
getPuzzleFetch('4')
  .then((puzzle) => {
    // console.log(`Fetch: ${puzzle}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

//* ASYNC-AWAIT
getPuzzleAsync('3')
  .then((puzzle) => {
    // console.log(`Async: ${puzzle}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
