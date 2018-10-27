const getCountryAsync = async (countryCode) => {
  const url = 'https://restcountries.eu/rest/v2/all';

  const response = await fetch(url, {});
  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error('Unable to fetch country');
  }
};

getCountryFetch('CH')
  .then((country) => {
    console.log(`Async: ${country.name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
