//* first use 'getLocation()' to use API call for finding location based on IP address.  from there use the returned 'location.country' value (such as 'US') as the input for the 'getCountryFetch()' API call.  the return value of one promise is supplied as the input for another

getLocationPromise()
  .then((location) => {
    return getCountryFetch(location.country);
  })
  .then((country) => {
    console.log(`Promise Chaining: ${country.name}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
