//* CALLBACK EXAMPLE
//* the callback we supply determines how the data is handled after it is received/returned
const getPuzzleCB = (wordCount, callback) => {
  const request = new XMLHttpRequest();
  const url = `//puzzle.mead.io/puzzle?wordCount=${wordCount}`;

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback('An error has occurred', undefined);
    }
  });
  request.open('GET', url);
  request.send();
};

//
//* PROMISE EXAMPLE
const getPuzzlePromise = (wordCount) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    const url = `//puzzle.mead.io/puzzle?wordCount=${wordCount}`;

    request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        //* if successful, the data gets sent to the resolve function (whatever it may be)
        resolve(data.puzzle);
      } else if (e.target.readyState === 4) {
        reject('An error has occurred');
      }
    });
    request.open('GET', url);
    request.send();
  });

//
//* FETCH EXAMPLE
const getPuzzleFetch = (wordCount) => {
  const url = `//puzzle.mead.io/puzzle?wordCount=${wordCount}`;

  return fetch(url, {})
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('Unable to fetch puzzle');
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};

//
//* ASYNC-AWAIT EXAMPLE
const getPuzzleAsync = async (wordCount) => {
  const url = `//puzzle.mead.io/puzzle?wordCount=${wordCount}`;

  const response = await fetch(url, {});
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to fetch puzzle');
  }
};
