'use strict';

const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = 'playing';
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = '';
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  });
  return puzzle;
};

Hangman.prototype.makeGuess = function(letter) {
  if (this.status === 'playing') {
    letter = letter.toLowerCase();
    const isUnique = !this.guessedLetters.includes(letter);
    const isIncorrect = !this.word.includes(letter);

    if (isUnique) {
      this.guessedLetters.push(letter);
    }
    if (isUnique && isIncorrect) {
      this.remainingGuesses--;
    }

    this.checkStatus();
  }
};

Hangman.prototype.checkStatus = function() {
  const finished = this.word.every((letter) => this.guessedLetters.includes(letter));

  if (this.remainingGuesses <= 0) {
    this.status = 'failed';
  } else if (finished) {
    this.status = 'finished';
  } else {
    this.status = 'playing';
  }
};

Hangman.prototype.statusMessage = function() {
  const word = this.word.join('');

  if (this.status === 'playing') {
    return `Guesses left: ${this.remainingGuesses}`;
  } else if (this.status === 'failed') {
    return `Nice try! The word was "${word[0].toUpperCase() + word.slice(1)}".`;
  } else {
    return 'Great work! You guessed the word.';
  }
};

Hangman.prototype.displayGame = function() {
  document.querySelector('#puzzle').textContent = this.getPuzzle();
  document.querySelector('#guesses').textContent = this.statusMessage();
  // console.log(this.status);
};
