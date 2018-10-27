'use strict';

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }

  //* here we use a 'getter' to retrieve the property 'puzzle' (which is declared by the specific name of the 'getter' if not declared explicitly in the constructor)
  get puzzle() {
    let puzzle = '';
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });
    return puzzle;
  }

  makeGuess(letter) {
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
  }

  checkStatus() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ');

    if (this.remainingGuesses <= 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }

  get statusMessage() {
    const word = this.word.join('');

    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
      return `Nice try! The word was "${word[0].toUpperCase() + word.slice(1)}".`;
    } else {
      return 'Great work! You guessed the word.';
    }
  }
}
