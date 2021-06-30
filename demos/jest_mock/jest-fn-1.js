const fetch = require('node-fetch');
const baseUrl = 'https://www.metaweather.com/api/location';

const fetchPlaces = (query) => new Promise((resolve, reject) => {
  const url = `${baseUrl}/search?query=${query}`;
  console.log('chegou aqui')

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

const weatherDescription = {
  sn: 'neve',
  sl: 'chuva com neve',
  h: 'chuva com granizo',
  t: 'tempestade com trovões',
  hr: 'chuva pesada',
  lr: 'chuva leve',
  s: 'pancadas de chuva',
  hc: 'nublado',
  lc: 'parcialmente nublado',
  c: 'ensolarado',
};

async function createWeatherObject({ query, id }) {
  try {
    if (!id) {
      const places = await fetchPlaces(query);
      id = places[0].woeid;
    }

    const { consolidated_weather, title } = await fetchWeather(id);

    const forecasts = [];

    consolidated_weather.forEach((weather) => {
      const { applicable_date: date, weather_state_abbr: abbr, min_temp , max_temp } = weather;

      const min = Math.round(min_temp);
      const max = Math.round(max_temp);

      forecasts.push({
        date,
        desc: `O clima previsto para a cidade de ${title} é: ${weatherDescription[abbr]}. A temperatura mínima é de ${min} graus Celsius e a máxima é de ${max} graus Celsius.`,
      });
    });

    return {
      title,
      forecasts,
    };
  } catch (err) {
    return { Error: err };
  }
}

module.exports = {
  fetchPlaces,
  fetchWeather,
  createWeatherObject,
};
