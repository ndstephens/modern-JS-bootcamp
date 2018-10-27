const game1 = new Hangman('cat', 2);
game1.displayGame();

//* the 'keypress' event listens for characters, not modifiers
window.addEventListener('keypress', (e) => {
  game1.makeGuess(e.key);
  game1.displayGame();
});
