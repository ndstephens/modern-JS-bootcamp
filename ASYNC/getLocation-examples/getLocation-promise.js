const yourLocationPromise = document.querySelector('#location-promise');

const getLocationPromise = () => {
  const token = '3b99d29c9c096f';
  const url = `https://ipinfo.io/json?token=${token}`;

  return fetch(url, {}).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(`Unable to fetch location`);
    }
  });
};

getLocationPromise()
  .then((location) => {
    yourLocationPromise.textContent = `Promise: You live in ${location.city}, ${location.region} ${location.country}`;
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
