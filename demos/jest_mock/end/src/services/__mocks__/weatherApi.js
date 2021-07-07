const { search, byId } = require('./fixtures/weatherApi.json');

const fetchPlaces = jest.fn();
const fetchWeather = jest.fn();

module.exports = {
  fetchPlaces,
  fetchWeather,
}