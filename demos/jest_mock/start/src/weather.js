const { fetchPlaces, fetchWeather } = require('./services/weatherApi');

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

function createForecast(weatherResponse) {
  const { consolidated_weather, title } = weatherResponse;

  const forecast = {
    city: title,
    forecasts: [],
  }

  consolidated_weather.forEach((weather) => {
    const { applicable_date: date, weather_state_abbr: abbr, min_temp , max_temp } = weather;

    const min = Math.round(min_temp);
    const max = Math.round(max_temp);

    forecast.forecasts.push({
      date,
      desc: `O clima previsto para a cidade de ${title} é: ${weatherDescription[abbr]}. A temperatura mínima é de ${min} graus Celsius e a máxima é de ${max} graus Celsius.`,
    });
  });

  return forecast;
} 

async function queryForecast({ query, id }) {
  try {
    if (!id && query) {
      const places = await fetchPlaces(query);
      id = places[0].woeid;
    }

    const weatherResponse = await fetchWeather(id);

    return createForecast(weatherResponse);
  } catch (err) {
    return { Error: err };
  }
}

module.exports = {
  queryForecast,
}
