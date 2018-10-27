const getCurrentCountry = async () => {
  const location = await getLocationAsync();
  const country = await getCountryAsync(location.country);
  return country;
};

getCurrentCountry()
  .then((country) => {
    console.log(`Async Chaining: ${country.name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
