const getCountryPromise = (countryCode) =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();
    const url = 'https://restcountries.eu/rest/v2/all';

    countryRequest.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const country = JSON.parse(e.target.responseText).find((country) => country.alpha2Code === countryCode);
        resolve(country);
      } else if (e.target.readyState === 4) {
        reject('An error has occurred');
      }
    });
    countryRequest.open('GET', url);
    countryRequest.send();
  });

getCountryPromise('MX').then(
  //* the 'resolve' function, which accepts the transferred data and does something with it
  (country) => {
    console.log(`Promise: ${country.name}`);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);
