//? API example using a callback approach
const getCountryCB = (countryCode, cb) => {
  const countryRequest = new XMLHttpRequest();
  const url = 'https://restcountries.eu/rest/v2/all';

  countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const country = JSON.parse(e.target.responseText).find((country) => country.alpha2Code === countryCode);
      cb(undefined, country);
    } else if (e.target.readyState === 4) {
      cb('An error has occurred');
    }
  });
  countryRequest.open('GET', url);
  countryRequest.send();
};

getCountryCB('US', (error, country) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`Callback: ${country.name}`);
  }
});
