const yourLocationAsync = document.querySelector('#location-async-await');

const getLocationAsync = async () => {
  const token = '3b99d29c9c096f';
  const url = `https://ipinfo.io/json?token=${token}`;

  const response = await fetch(url, {});
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`Unable to fetch location`);
  }
};

getLocationAsync()
  .then((location) => {
    yourLocationAsync.textContent = `Async-Await: You live in ${location.city}, ${location.region} ${location.country}`;
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
