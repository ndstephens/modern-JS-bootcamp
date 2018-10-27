//* Fetch always returns a Promise

fetch('http://puzzle.mead.io/puzzle', {})
  .then((response) => {
    if (response.status === 200) {
      //* '.json()' returns a promise, which we then return so it can be chained and handled by the next '.then' block
      return response.json();
    } else {
      //* if the response isn't useful (a 404) you can throw an error to send it to the catch block
      throw new Error('Unable to fetch puzzle');
    }
  })
  .then((data) => {
    console.log(data.puzzle);
  })
  .catch((error) => {
    console.log(error);
  });
