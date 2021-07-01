const { search, byId } = require('./fixtures/weatherApi.json');

const fetchPlaces = jest.fn().mockResolvedValue(search);
const fetchWeather = jest.fn().mockResolvedValue(byId);

module.exports = {
  fetchPlaces,
  fetchWeather,
}