const getCountryFetch = (countryCode) => {
  const url = 'https://restcountries.eu/rest/v2/all';

  return fetch(url, {})
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('Unable to fetch country');
      }
    })
    .then((data) => {
      return data.find((country) => country.alpha2Code === countryCode);
    });
};

getCountryFetch('AU')
  .then((country) => {
    console.log(`Fetch: ${country.name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
