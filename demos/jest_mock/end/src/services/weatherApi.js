const fetch = require('node-fetch');
const baseUrl = 'https://www.metaweather.com/api/location';

const fetchPlaces = (query) => new Promise((resolve, reject) => {
  const url = `${baseUrl}/search?query=${query}`;

  fetch(url)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const fetchWeather = (id) => new Promise((resolve, reject) => {
  const url = `${baseUrl}/location/${id}`;

  fetch(url)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

module.exports = {
  fetchPlaces,
  fetchWeather,
}
